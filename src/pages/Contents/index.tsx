import { useQuery } from '@apollo/client';
import { GET_CONTENTS } from 'graphql/queries';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { GetChaptersResponse } from 'types/graphql';

type Props = {};

const Contents: FC<Props> = () => {
  const { data } = useQuery<GetChaptersResponse>(GET_CONTENTS);
  return (
    <div>
      <ul>
        {[...(data?.getChapters?.chapters ?? [])]
          ?.sort((a, b) => a.order - b.order)
          .map?.((chapter) => {
            return (
              <li key={chapter.id}>
                <Link to={`chapter/${chapter.order}`}>{chapter.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Contents;
