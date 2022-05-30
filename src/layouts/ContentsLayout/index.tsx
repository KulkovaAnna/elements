import { Contents, ContentsItem, ContentsProps } from 'components';
import React, { FC } from 'react';
import { ArticleWrapper, Container } from './styles';

interface Props extends Omit<ContentsProps, 'data'> {
  contents: ContentsItem[];
  children?: JSX.Element;
}

const ContentsLayout: FC<Props> = ({
  contents,
  children,
  ...contentsProps
}) => {
  return (
    <Container>
      <Contents data={contents} {...contentsProps} />
      <ArticleWrapper>{children}</ArticleWrapper>
    </Container>
  );
};

export default ContentsLayout;
