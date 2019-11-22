import * as React from 'react';

import NextApp from 'next/app';
import { AppWrapper } from '../containers/AppWrapper/AppWrapper';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppWrapper title="Lulz tech">
        <Component {...pageProps} />
      </AppWrapper>
    );
  }
}
