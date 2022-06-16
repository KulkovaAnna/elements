import React, { FC } from 'react';
import { MainLayout } from '@/layouts';
import { Container } from './styles';

type Props = Record<string, never>;

const HomeScreen: FC<Props> = () => {
  return (
    <MainLayout>
      <Container>Однажды тут будет контент...</Container>
    </MainLayout>
  );
};

export default HomeScreen;
