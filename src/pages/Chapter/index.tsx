import { useQuery } from '@apollo/client';
import { GET_CONTENTS } from 'graphql/queries';
import useDimension from 'hooks/useDimension';
import { ContentsLayout } from 'layouts';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GetChaptersResponse } from 'types/graphql';
import Article from './components/Article';

type Props = Record<string, never>;

const CharacterPage: FC<Props> = () => {
  const [search] = useSearchParams();
  const order = +(search.get('order') ?? 1);
  const { data } = useQuery<GetChaptersResponse>(GET_CONTENTS);
  const { isTablet } = useDimension();

  useEffect(() => {
    if (document.scrollingElement?.scrollTop) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [search]);

  const [showContents, setShowContents] = useState(false);

  const handleShowContents = () => {
    setShowContents(!showContents);
  };

  const handleNavItemClick = useCallback(() => {
    if (isTablet) {
      setShowContents(false);
    }
  }, [isTablet]);

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
      isOpen={showContents}
      onCloseButtonClick={handleShowContents}
      onItemClick={handleNavItemClick}
    >
      <Article order={order} onMenuClick={handleShowContents} />
    </ContentsLayout>
  );
};

export default CharacterPage;
