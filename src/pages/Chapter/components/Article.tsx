import { useQuery } from '@apollo/client';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingScreen from 'components/LoadingScreen';
import { MENU_ICON_COLOR } from 'constants/colors';
import { GET_CHAPTER_BY_ORDER } from 'graphql/queries';
import Page404 from 'pages/404';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  GetChapterByOrderResponse,
  GetChapterByOrderInput,
} from 'types/graphql';
import {
  Block,
  TitleWrapper,
  Title,
  Navigation,
  MenuLink,
  Paragraph,
} from '../styles';

interface Props {
  order: number;
}

const Article: FC<Props> = ({ order }) => {
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

  if (order && !loading && !data?.getNthChapter?.chapter) {
    return <Page404 />;
  }
  return (
    <Block>
      <TitleWrapper>
        <Title>{chapterInfo?.title}</Title>
        <Navigation>
          {!!prevChapter && (
            <MenuLink to={`/contents?order=${prevChapter}`}>
              <FontAwesomeIcon
                icon={solid('caret-left')}
                color={MENU_ICON_COLOR}
                size="3x"
              />
            </MenuLink>
          )}
          {!!nextChapter && (
            <MenuLink to={`/contents?order=${nextChapter}`}>
              <FontAwesomeIcon
                icon={solid('caret-right')}
                color={MENU_ICON_COLOR}
                size="3x"
              />
            </MenuLink>
          )}
        </Navigation>
      </TitleWrapper>
      <ReactMarkdown
        components={{
          p: Paragraph as any,
        }}
      >
        {chapterInfo?.content ?? ''}
      </ReactMarkdown>
    </Block>
  );
};
export default Article;
