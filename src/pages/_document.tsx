import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="description" content="Лучший стартап, покажи его своей маме" />
        </Head>

        <body style={{ margin: 0, padding: 0, backgroundColor: '#000' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

