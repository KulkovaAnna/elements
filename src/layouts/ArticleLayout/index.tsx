import { Anchor, InfoTable, NavHeader } from 'components';
import React, { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getHeaders } from 'utils/articles';
import { ClickableHeader } from './components';
import {
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

type Props = {
  title: string;
  description?: string;
  article: string;
  mainImage?: string;
  navPath: { title: string; to: string }[];
  infoTable?: { title: string; value: string }[];
};

const ArticleLayout: FC<Props> = ({
  title,
  description,
  article,
  mainImage,
  navPath = [],
  infoTable = [],
}) => {
  const [headerIds, setHeaderIds] = useState<string[]>([]);

  const navs = getHeaders(article ?? '', '##');

  useEffect(() => {
    const headers = document.querySelectorAll('.article-header');
    if (!headerIds.length && navs?.length) {
      setHeaderIds(Array.from(headers).map((elem) => elem.id));
    }
  }, [headerIds.length, navs]);

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
        <NavHeader links={navPath} />
        <div>
          <Name>{title}</Name>
          <ImageWrapper>
            <HeroImage
              src={
                mainImage
                  ? `${process.env.REACT_APP_STORAGE_URL}/${mainImage}`
                  : require('../../assets/male_placeholder.png')
              }
            />
            <InfoTable info={infoTable} />
          </ImageWrapper>
          <Description>{description}</Description>
          {article && (
            <ReactMarkdown
              components={{
                h2: ClickableHeader as FC,
                p: Paragraph as any,
              }}
            >
              {article}
            </ReactMarkdown>
          )}
        </div>
      </Main>
    </Container>
  );
};

export default ArticleLayout;
