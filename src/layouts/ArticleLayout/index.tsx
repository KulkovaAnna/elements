import { Anchor, InfoTable, NavHeader } from 'components';
import useDimension from 'hooks/useDimension';
import ContentsLayout, { ContentsItem } from 'layouts/ContentsLayout';
import React, { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import { getHeaders } from 'utils/articles';
import { ClickableHeader } from './components';
import {
  Description,
  HeroImage,
  ImageWrapper,
  ListItem,
  Main,
  Name,
  Paragraph,
} from './styles';

type Props = {
  title: string;
  description?: string;
  article: string;
  mainImage?: string;
  navPath: ContentsItem[];
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

  const { hash } = useLocation();

  const navs = getHeaders(article ?? '', '##');

  const { isTablet } = useDimension();

  useEffect(() => {
    const headers = document.querySelectorAll('.article-header');
    if (!headerIds.length && navs?.length) {
      setHeaderIds(Array.from(headers).map((elem) => elem.id));
    }
  }, [headerIds.length, navs]);

  const renderNavItem = (item: ContentsItem, index: number) => {
    const href = `#${headerIds[index]}`;
    return (
      <ListItem key={index} selected={href === hash}>
        <Anchor href={href}>{item.title}</Anchor>
      </ListItem>
    );
  };

  return (
    <ContentsLayout
      contents={navs?.map((nav) => ({ title: nav, to: '#' })) ?? []}
      renderItem={renderNavItem}
      showCloseButton={false}
      showHomeButton={false}
      isOpen={!isTablet}
    >
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
                p: Paragraph as FC,
              }}
            >
              {article}
            </ReactMarkdown>
          )}
        </div>
      </Main>
    </ContentsLayout>
  );
};

export default ArticleLayout;
