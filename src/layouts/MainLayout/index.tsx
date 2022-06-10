import { Header } from 'components';
import React, { FC } from 'react';
import { Container } from './styles';

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default MainLayout;
