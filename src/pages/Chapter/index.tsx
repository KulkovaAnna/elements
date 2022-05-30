import { useQuery } from '@apollo/client';
import { GET_CONTENTS } from 'graphql/queries';
import { ContentsLayout } from 'layouts';
import React, { FC, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GetChaptersResponse } from 'types/graphql';
import Article from './components/Article';

type Props = Record<string, never>;

const CharacterPage: FC<Props> = () => {
  const [search] = useSearchParams();
  const order = +(search.get('order') ?? 1);
  const { data } = useQuery<GetChaptersResponse>(GET_CONTENTS);

  const chapters = useMemo(
    () => data?.getChapters?.chapters ?? [],
    [data?.getChapters?.chapters]
  );

  const currentChapterIndex = useMemo(
    () => chapters.findIndex((chapter) => chapter.order === order),
    [chapters, order]
  );

  const contents = useMemo(
    () =>
      chapters.map((chapter) => ({
        title: chapter.title ?? '',
        to: `/contents?order=${chapter.order}`,
      })) ?? [],
    [chapters]
  );

  return (
    <ContentsLayout
      contents={contents}
      selectedIndex={currentChapterIndex}
      defaultIsOpened={!search.get('order')}
      showCloseButton
      showHomeButton
    >
      <Article order={order} />
    </ContentsLayout>
  );
};

export default CharacterPage;
