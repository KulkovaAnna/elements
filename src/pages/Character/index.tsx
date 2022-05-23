import { useQuery } from '@apollo/client';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor, InfoTable, NavHeader } from 'components';
import { GET_CHARACTER_BY_ID } from 'graphql/queries';
import React, { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { GetCharacterByIdInput, GetCharacterByIdResponse } from 'types/graphql';
import { getHeaders } from 'utils/articles';
import { ClickableHeader } from './components';
import {
  CenteredContainer,
  Container,
  Description,
  HeroImage,
  ImageWrapper,
  List,
  ListItem,
  Main,
  Name,
  Navigation,
  Paragraph,
} from './styles';

type Props = {};

const CharacterPage: FC<Props> = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<
    GetCharacterByIdResponse,
    GetCharacterByIdInput
  >(GET_CHARACTER_BY_ID, { variables: { id: Number(id) } });
  const [headerIds, setHeaderIds] = useState<string[]>([]);
  const heroInfo = data?.getCharacterById;

  if (error) {
    console.error(error);
  }

  const navs = getHeaders(heroInfo?.story ?? '', '##');

  useEffect(() => {
    const headers = document.querySelectorAll('.article-header');
    if (!headerIds.length && navs?.length) {
      setHeaderIds(Array.from(headers).map((elem) => elem.id));
    }
  }, [headerIds.length, navs]);

  if (loading) {
    return (
      <CenteredContainer>
        <FontAwesomeIcon icon={solid('spinner')} size="6x" spin />
      </CenteredContainer>
    );
  }

  return (
    <Container>
      <Navigation>
        <div>
          <List>
            {navs?.map((header, index) => {
              return (
                <ListItem key={index}>
                  <Anchor href={`#${headerIds[index]}`}>{header}</Anchor>
                </ListItem>
              );
            })}
          </List>
        </div>
        <div>
          <List>
            <ListItem>Скачать как PDF</ListItem>
            <ListItem>Версия для печати</ListItem>
          </List>
        </div>
      </Navigation>
      <Main>
        <NavHeader
          links={[
            { title: 'Персонажи', to: '/characters' },
            { title: heroInfo?.name ?? '', to: '#' },
          ]}
        />
        <div>
          <Name>{heroInfo?.name}</Name>
          <ImageWrapper>
            <HeroImage
              src={
                heroInfo?.hero_image
                  ? `${process.env.REACT_APP_STORAGE_URL}/${heroInfo?.hero_image}`
                  : require('../../assets/male_placeholder.png')
              }
            />
            <InfoTable
              info={[
                { title: 'Раса', value: heroInfo?.race },
                { title: 'Пол', value: heroInfo?.sex },
                { title: 'Полное имя', value: heroInfo?.full_name },
                {
                  title: 'Годы жизни',
                  value: `${heroInfo?.birth_date ?? '?'} - ${
                    heroInfo?.death_date ?? '?'
                  }`,
                },
                ...(heroInfo?.family?.map((rel) => ({
                  title: rel.related_as as string,
                  value: rel.name,
                })) ?? []),
              ]}
            />
          </ImageWrapper>
          <Description>{heroInfo?.description}</Description>
          {heroInfo?.story && (
            <ReactMarkdown
              components={{
                h2: ClickableHeader as FC,
                p: Paragraph as any,
              }}
            >
              {heroInfo.story}
            </ReactMarkdown>
          )}
        </div>
      </Main>
    </Container>
  );
};

export default CharacterPage;
