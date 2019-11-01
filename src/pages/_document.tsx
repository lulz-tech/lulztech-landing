import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {

  componentDidMount() {
    (window as any).dataLayer = (window as any).dataLayer || [];

    function gtag(firstArg: string, secondArg: any) { ((window as any).dataLayer as any).push(arguments); }

    gtag('js', new Date());

    gtag('config', 'UA-137782215-1');
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Lulz Tech: Лучший технологический стартап</title>
          <meta name="description" content="Лучший стартап" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-137782215-1"></script>
        </Head>

        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

