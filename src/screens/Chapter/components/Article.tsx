import React from 'react';
import { NthChapter } from '@/types/models';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MENU_ICON_COLOR } from '@/constants/colors';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Block,
  MenuLink,
  Navigation,
  Paragraph,
  Title,
  TitleWrapper,
} from '../styles';
import Link from 'next/link';

interface Props {
  article: NthChapter;
  onMenuClick?(): void;
}

const Article: FC<Props> = ({ article, onMenuClick }) => {
  const {
    chapter: chapterInfo,
    next: nextChapter,
    prev: prevChapter,
  } = article;

  return (
    <Block>
      <TitleWrapper>
        <FontAwesomeIcon
          icon={solid('bars')}
          size="2x"
          color={MENU_ICON_COLOR}
          onClick={onMenuClick}
        />
        <Title>{chapterInfo?.title}</Title>
        <Navigation>
          {!!prevChapter && (
            <Link href={`/chapters/${prevChapter}`} passHref>
              <MenuLink>
                <FontAwesomeIcon
                  icon={solid('chevron-left')}
                  color={MENU_ICON_COLOR}
                  size="2x"
                />
              </MenuLink>
            </Link>
          )}
          {!!nextChapter && (
            <Link href={`/chapters/${nextChapter}`} passHref>
              <MenuLink>
                <FontAwesomeIcon
                  icon={solid('chevron-right')}
                  color={MENU_ICON_COLOR}
                  size="2x"
                />
              </MenuLink>
            </Link>
          )}
        </Navigation>
      </TitleWrapper>
      <ReactMarkdown
        components={{
          p: Paragraph as FC,
        }}
      >
        {chapterInfo?.content ?? ''}
      </ReactMarkdown>
    </Block>
  );
};
export default Article;
