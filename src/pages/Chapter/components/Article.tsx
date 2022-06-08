import { useQuery } from '@apollo/client';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingScreen from 'components/LoadingScreen';
import { MENU_ICON_COLOR } from 'constants/colors';
import { GET_CHAPTER_BY_ORDER } from 'graphql/queries';
import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  GetChapterByOrderInput,
  GetChapterByOrderResponse,
} from 'types/graphql';
import {
  Block,
  MenuLink,
  Navigation,
  Paragraph,
  Title,
  TitleWrapper,
} from '../styles';

interface Props {
  order: number;
  onMenuClick?(): void;
}

const Article: FC<Props> = ({ order, onMenuClick }) => {
  const { data, loading } = useQuery<
    GetChapterByOrderResponse,
    GetChapterByOrderInput
  >(GET_CHAPTER_BY_ORDER, { variables: { order: Number(order) } });
  const {
    chapter: chapterInfo,
    next: nextChapter,
    prev: prevChapter,
  } = data?.getNthChapter ?? {};

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Block>
      <TitleWrapper>
        <FontAwesomeIcon
          icon={solid('align-justify')}
          size="2x"
          color={MENU_ICON_COLOR}
          onClick={onMenuClick}
        />
        <Title>{chapterInfo?.title}</Title>
        <Navigation>
          {!!prevChapter && (
            <MenuLink to={`/contents?order=${prevChapter}`}>
              <FontAwesomeIcon
                icon={solid('chevron-left')}
                color={MENU_ICON_COLOR}
                size="2x"
              />
            </MenuLink>
          )}
          {!!nextChapter && (
            <MenuLink to={`/contents?order=${nextChapter}`}>
              <FontAwesomeIcon
                icon={solid('chevron-right')}
                color={MENU_ICON_COLOR}
                size="2x"
              />
            </MenuLink>
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
