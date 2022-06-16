import client from '@/.apollo-clent';
import { GET_CHARACTERS_FOR_CONTENTS } from '@/graphql/queries';
import { CharacterListScreen } from '@/screens';
import { GetCharactersForContentsResponse } from '@/types/graphql';
import { Character } from '@/types/models';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';

type Props = {
  heroes: Character[];
};

const CharactersList: FC<Props> = ({ heroes }) => {
  return <CharacterListScreen characters={heroes} />;
};

export default CharactersList;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query<GetCharactersForContentsResponse>({
    query: GET_CHARACTERS_FOR_CONTENTS,
  });
  return {
    props: {
      heroes: data?.getCharacters,
    },
  };
};
