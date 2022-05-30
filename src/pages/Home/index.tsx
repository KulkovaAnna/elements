import React, { FC } from 'react';
import { Header } from 'components';
import './styles.css';

type Props = Record<string, never>;

const HomePage: FC<Props> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
