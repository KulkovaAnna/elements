import client from '@/.apollo-clent';
import {
  GET_CHARACTERS_FOR_CONTENTS,
  GET_CHARACTER_BY_ID,
} from '@/graphql/queries';
import { CharacterScreen } from '@/screens';
import {
  GetCharacterByIdInput,
  GetCharacterByIdResponse,
  GetCharactersForContentsResponse,
} from '@/types/graphql';
import { Character as CharInfo } from '@/types/models';
import { GetStaticPaths, GetStaticProps } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FC } from 'react';

type Params = {
  id: string;
};

interface Props extends SSRConfig {
  heroInfo: CharInfo;
}

const Character: FC<Props> = ({ heroInfo }) => {
  return <CharacterScreen heroInfo={heroInfo} />;
};

export default Character;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetCharactersForContentsResponse>({
    query: GET_CHARACTERS_FOR_CONTENTS,
  });
  return {
    fallback: 'blocking',
    paths: data.getCharacters?.map((ch) => `/characters/${ch.id}`),
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
  locale,
}) => {
  if (params?.id) {
    const { data } = await client.query<
      GetCharacterByIdResponse,
      GetCharacterByIdInput
    >({
      query: GET_CHARACTER_BY_ID,
      variables: { id: +params.id },
    });
    if (!data?.getCharacterById) {
      return {
        notFound: true,
      };
    }
    return {
      revalidate: 10,
      props: {
        heroInfo: data.getCharacterById,
        ...(await serverSideTranslations(locale ?? 'ru', [
          'common',
          'race',
          'sex',
          'relationships',
        ])),
      },
    };
  }
  return {
    notFound: true,
  };
};
