import { useQuery } from '@apollo/client';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MENU_ICON_COLOR } from 'constants/colors';
import { GET_CHAPTER_BY_ORDER } from 'graphql/queries';
import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  GetChapterByOrderInput,
  GetChapterByOrderResponse,
} from 'types/graphql';
import {
  Block,
  Container,
  Navigation,
  Paragraph,
  Title,
  TitleWrapper,
} from './styles';

type Props = {};

const CharacterPage: FC<Props> = () => {
  const { order } = useParams();
  const { data } = useQuery<GetChapterByOrderResponse, GetChapterByOrderInput>(
    GET_CHAPTER_BY_ORDER,
    { variables: { order: Number(order) } }
  );
  const {
    chapter: chapterInfo,
    next: nextChapter,
    prev: prevChapter,
  } = data?.getNthChapter ?? {};

  const paragraphs = chapterInfo?.content?.split('\\n');
  return (
    <Container>
      <Block>
        <TitleWrapper>
          <Title>{chapterInfo?.title}</Title>
          <Navigation>
            {!!prevChapter && (
              <Link to={`/contents/${prevChapter}`}>
                <FontAwesomeIcon
                  icon={solid('caret-left')}
                  color={MENU_ICON_COLOR}
                />
              </Link>
            )}
            <Link to={`/contents`}>
              <FontAwesomeIcon
                icon={solid('book-open')}
                color={MENU_ICON_COLOR}
              />
            </Link>
            {!!nextChapter && (
              <Link to={`/contents/${nextChapter}`}>
                <FontAwesomeIcon
                  icon={solid('caret-right')}
                  color={MENU_ICON_COLOR}
                />
              </Link>
            )}
          </Navigation>
        </TitleWrapper>
        {paragraphs?.map((p, index) => (
          <Paragraph key={index}>{p}</Paragraph>
        ))}
      </Block>
    </Container>
  );
};

export default CharacterPage;
