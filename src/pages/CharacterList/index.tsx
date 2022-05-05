import CharacterClient from 'client/CharacterClient';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Character } from 'types/models';
import './styles.css';

type Props = {};

const CharacterList: FC<Props> = () => {
  const client = useMemo(() => new CharacterClient(), []);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    client.getAll().then(setCharacters);
  }, [client]);

  return (
    <div>
      <ul>
        {characters?.map?.((hero) => {
          return (
            <li key={hero.id}>
              <Link to={`character/${hero.id}`}>{hero.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CharacterList;
