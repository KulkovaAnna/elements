import React, { FC } from 'react';
import './styles.css';
import { MainLayout } from 'layouts';

type Props = Record<string, never>;

const HomePage: FC<Props> = () => {
  return <MainLayout>Hello</MainLayout>;
};

export default HomePage;
