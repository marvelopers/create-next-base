import { Global } from '@emotion/react';
import { GlobalStyle } from '@src/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </>
  );
}
