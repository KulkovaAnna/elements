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
import React, { FC } from 'react';

type Params = {
  id: string;
};

type Props = {
  heroInfo: CharInfo;
};

const Character: FC<Props> = ({ heroInfo }) => {
  return <CharacterScreen heroInfo={heroInfo} />;
};

export default Character;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
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
      },
    };
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { data } = await client.query<GetCharactersForContentsResponse>({
    query: GET_CHARACTERS_FOR_CONTENTS,
  });
  return {
    paths: data.getCharacters.map((char) => ({
      params: {
        id: char.id.toString(),
      },
    })),
    fallback: true,
  };
};
