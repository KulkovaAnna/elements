import { useHeaderHeight } from 'components/Header';
import React, { FC } from 'react';
import { Container, FixedHeader, Children } from './styles';

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
  currentLink?: '';
};

const MainLayout: FC<Props> = ({ children }) => {
  const headerHeight = useHeaderHeight();
  return (
    <Container>
      <FixedHeader />
      <Children style={{ marginTop: headerHeight }}>{children}</Children>
    </Container>
  );
};

export default MainLayout;
