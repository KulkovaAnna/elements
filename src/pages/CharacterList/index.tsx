import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from 'graphql/queries';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { GetCharactersResponse } from 'types/graphql';
import './styles.css';

type Props = {};

const CharacterList: FC<Props> = () => {
  const { data } = useQuery<GetCharactersResponse>(GET_CHARACTERS);
  return (
    <div>
      <ul>
        {data?.getCharacters?.map?.((hero: any) => {
          return (
            <li key={hero.id}>
              <Link to={`${hero.id}`}>{hero.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharacterList;
