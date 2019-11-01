import * as React from 'react';

import NextApp, { Container } from 'next/app';
import { AppWrapper } from '../containers/AppWrapper/AppWrapper';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <AppWrapper title="Lulz tech">
          <Component {...pageProps} />
        </AppWrapper>
      </Container>
    )
  }

}
