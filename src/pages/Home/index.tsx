import React, { FC } from 'react';
import { MainLayout } from 'layouts';
import { Container } from './styles';

type Props = Record<string, never>;

const HomePage: FC<Props> = () => {
  return (
    <MainLayout>
      <Container>Однажды тут будет контент...</Container>
    </MainLayout>
  );
};

export default HomePage;
