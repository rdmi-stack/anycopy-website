import { NextUIProvider } from '@nextui-org/react';
import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../utils/fontawesome';
import PrelineScript from '../components/PrelineScript';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);

  return (
    <>
     

      <NextUIProvider>
          <PrelineScript />
          <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
