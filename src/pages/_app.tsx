import { Global } from '@emotion/react';
import { setupMSW } from '@src/msw';
import { GlobalStyle } from '@src/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import React from 'react';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  setupMSW();
}
export default function App({ Component, pageProps }: AppProps) {
  fetch('/msw/init').then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  return (
    <>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </>
  );
}
