import * as React from 'react'

import { NextPage } from 'next'
import Head from 'next/head'

import { Home } from '../containers/Home/Home'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lulz Tech: Лучший технологический стартап</title>
      </Head>

      <Home />
    </>
  )
}

export default IndexPage
