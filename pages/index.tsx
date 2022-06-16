import React from 'react';
import { HomeScreen } from '@/screens';
import Head from 'next/head';

function App() {
  return (
    <>
      <Head>
        <title>Во власти стихий</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeScreen />
    </>
  );
}

export default App;
