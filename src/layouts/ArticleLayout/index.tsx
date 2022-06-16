import { Anchor, InfoTable } from '@/components';
import useDimension from '@/hooks/useDimension';
import ContentsLayout, { ContentsItem } from '@/layouts/ContentsLayout';
import MainLayout from '@/layouts/MainLayout';
import React, { FC, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getHeaders } from '@/utils/articles';
import { ClickableHeader } from './components';
import {
  Description,
  HeroInfo,
  ImageWrapper,
  ListItem,
  Main,
  Name,
  Paragraph,
} from './styles';
import Image from 'next/image';

type Props = {
  title: string;
  description?: string;
  article: string;
  mainImage?: string;
  infoTable?: { title: string; value: string }[];
};

const ArticleLayout: FC<Props> = ({
  title,
  description,
  article,
  mainImage,
  infoTable = [],
}) => {
  const [headerIds, setHeaderIds] = useState<string[]>([]);

  const navs = getHeaders(article ?? '', '##');

  const { isTablet } = useDimension();

  useEffect(() => {
    if (document) {
      const headers = document?.querySelectorAll('.article-header');
      if (!headerIds.length && navs?.length) {
        setHeaderIds(Array.from(headers).map((elem) => elem.id));
      }
    }
  }, [headerIds.length, navs]);

  const renderNavItem = (item: ContentsItem, index: number) => {
    const href = `#${headerIds[index]}`;
    return (
      <ListItem key={index}>
        <Anchor href={href}>{item.title}</Anchor>
      </ListItem>
    );
  };
  return (
    <MainLayout>
      <ContentsLayout
        contents={navs?.map((nav) => ({ title: nav, to: '#' })) ?? []}
        renderItem={renderNavItem}
        showCloseButton={false}
        showHomeButton={false}
        isOpen={!isTablet}
        includeHeaderHeight
      >
        <Main>
          <div>
            <Name>{title}</Name>
            <HeroInfo id="wrapper">
              <ImageWrapper>
                <Image
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  src={
                    mainImage
                      ? `${process.env.STORAGE_URL}/${mainImage}`
                      : '/male_placeholder.png'
                  }
                />
              </ImageWrapper>

              <InfoTable info={infoTable} />
            </HeroInfo>
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
    </MainLayout>
  );
};

export default ArticleLayout;
