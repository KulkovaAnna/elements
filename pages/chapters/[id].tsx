import client from '@/.apollo-clent';
import { GET_CHAPTER_BY_ID, GET_CONTENTS } from '@/graphql/queries';
import { ChapterScreen } from '@/screens';
import {
  GetChapterByIdInput,
  GetChapterByIdResponse,
  GetChaptersResponse,
} from '@/types/graphql';
import { Content, NthChapter } from '@/types/models';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import React, { FC } from 'react';

interface Props extends SSRConfig {
  currentChapter?: NthChapter;
  contents: Content;
}

const Chapter: FC<Props> = ({ contents, currentChapter }) => {
  if (contents && currentChapter) {
    return (
      <ChapterScreen contents={contents} currentChapter={currentChapter} />
    );
  }
  return null;
};

export default Chapter;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetChaptersResponse>({
    query: GET_CONTENTS,
  });
  return {
    paths: data.getChapters?.chapters?.map((ch) => `/chapters/${ch.id}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  locale,
}) => {
  const { data: chapters } = await client.query<GetChaptersResponse>({
    query: GET_CONTENTS,
  });
  const i18nConfig = await serverSideTranslations(locale ?? 'ru', ['common']);
  if (params?.id) {
    const { data } = await client.query<
      GetChapterByIdResponse,
      GetChapterByIdInput
    >({
      query: GET_CHAPTER_BY_ID,
      variables: { id: +params.id },
    });
    if (!data.getChapterById.chapter) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        currentChapter: data.getChapterById,
        contents: chapters.getChapters,
        ...i18nConfig,
      },
      revalidate: 10,
    };
  }
  return {
    props: {
      contents: chapters.getChapters,
      ...i18nConfig,
    },
  };
};
