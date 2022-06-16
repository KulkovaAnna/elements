import useDimension from '@/hooks/useDimension';
import useDisableBodyScroll from '@/hooks/usePreventBodyScroll';
import React, { FC } from 'react';
import { Contents, ContentsItem, ContentsProps } from './components';
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
  const { isMobile } = useDimension();
  useDisableBodyScroll(isMobile && !!contentsProps.isOpen);
  return (
    <Container>
      <Contents data={contents} {...contentsProps} />
      <ArticleWrapper>{children}</ArticleWrapper>
    </Container>
  );
};

export default ContentsLayout;

export type { ContentsItem };
