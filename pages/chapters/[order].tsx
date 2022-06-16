import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import {
  GetChapterByOrderInput,
  GetChapterByOrderResponse,
  GetChaptersResponse,
} from '@/types/graphql';
import { GET_CONTENTS, GET_CHAPTER_BY_ORDER } from '@/graphql/queries';
import client from '@/.apollo-clent';
import { Content, NthChapter } from '@/types/models';
import { ChapterScreen } from '@/screens';

interface Props {
  currentChapter: NthChapter;
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: chapters } = await client.query<GetChaptersResponse>({
    query: GET_CONTENTS,
  });
  if (params?.order) {
    const { data } = await client.query<
      GetChapterByOrderResponse,
      GetChapterByOrderInput
    >({
      query: GET_CHAPTER_BY_ORDER,
      variables: { order: +params.order },
    });
    if (!data.getNthChapter.chapter) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        currentChapter: data.getNthChapter,
        contents: chapters.getChapters,
      },
    };
  }
  return {
    props: { contents: chapters.getChapters.chapters },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetChaptersResponse>({
    query: GET_CONTENTS,
  });
  return {
    paths: data.getChapters.chapters.map((content) => ({
      params: {
        order: content.order.toString(),
      },
    })),
    fallback: true,
  };
};
