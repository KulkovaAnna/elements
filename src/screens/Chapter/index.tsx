import { Content, NthChapter } from '@/types/models';
import useDimension from '@/hooks/useDimension';
import { ContentsLayout } from '@/layouts';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Article } from './components';

type Props = {
  currentChapter: NthChapter;
  contents: Content;
};

const ChapterScreen: FC<Props> = ({ contents, currentChapter }) => {
  const { isTablet } = useDimension();

  const [showContents, setShowContents] = useState(false);

  const handleShowContents = () => {
    setShowContents(!showContents);
  };

  const handleNavItemClick = useCallback(() => {
    if (isTablet) {
      setShowContents(false);
    }
  }, [isTablet]);

  const chapters = useMemo(() => contents?.chapters, [contents]);

  const currentChapterIndex = useMemo(
    () =>
      chapters.findIndex(
        (chapter) => chapter.order === currentChapter.chapter.order
      ),
    [chapters]
  );

  const layoutContents = useMemo(
    () =>
      chapters.map((chapter) => ({
        title: chapter.title ?? '',
        to: `/chapters/${chapter.order}`,
      })) ?? [],
    [chapters]
  );

  return (
    <ContentsLayout
      contents={layoutContents}
      selectedIndex={currentChapterIndex}
      defaultIsOpened={!currentChapter.chapter.order}
      showCloseButton
      showHomeButton
      isOpen={showContents}
      onCloseButtonClick={handleShowContents}
      onItemClick={handleNavItemClick}
    >
      <Article article={currentChapter} onMenuClick={handleShowContents} />
    </ContentsLayout>
  );
};

export default ChapterScreen;
