import client from '@/.apollo-clent';
import { GET_CHARACTER_BY_ID } from '@/graphql/queries';
import { CharacterScreen } from '@/screens';
import {
  GetCharacterByIdInput,
  GetCharacterByIdResponse,
} from '@/types/graphql';
import { Character as CharInfo } from '@/types/models';
import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
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
