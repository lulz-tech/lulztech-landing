import React from 'react';

import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import ErrorPage from '../containers/Error/Error';

type ErrorProps = {
  statusCode?: number;
};

const Error: NextPage<ErrorProps> = ({ statusCode }: ErrorProps) => (
  <>
    <Head>
      <title>Lulz Tech: Лучший технологический стартап</title>
    </Head>

    <ErrorPage statusCode={statusCode} />
  </>
);

Error.getInitialProps = async ({ res, err }: NextPageContext): Promise<ErrorProps> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
