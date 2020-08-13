import { Space } from 'antd'
import Head from 'next/head'
import React from 'react'

import Credentials from '../features/auth/credentials'
import TokenDisplay from '../features/auth/token-display'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>lexstep-auth0-client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Space size="large" direction="vertical">
          <Credentials />
          <TokenDisplay />
        </Space>
      </main>
    </div>
  )
}

export default Home
