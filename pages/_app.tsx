/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

interface IMyApp {
  Component: React.FC,
  pageProps: unknown
}

const MyApp: React.FC<IMyApp> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
