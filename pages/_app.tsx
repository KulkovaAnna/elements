import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import './app.css';
import { useRouter } from 'next/router';
import LoadingScreen from '@/components/LoadingScreen';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const startLoading = (url: string) => {
      if (url !== router.asPath) setLoading(true);
    };
    const stopLoading = () => {
      setLoading(false);
    };
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    router.events.on('routeChangeError', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
      router.events.off('routeChangeError', stopLoading);
    };
  }, [router]);
  if (loading) {
    return <LoadingScreen />;
  }
  return <Component {...pageProps} />;
}

export default MyApp;
