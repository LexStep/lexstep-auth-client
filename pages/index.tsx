import { Typography } from 'antd'
import Head from 'next/head'
import React from 'react'

import Example from '../features/starter/example'

const { Title, Paragraph, Text } = Typography

type StringMap = {
  [key: string]: string | undefined
}

/* eslint-disable prefer-destructuring */
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET
/* eslint-enable prefer-destructuring */

const variables: StringMap = {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
}

const Code: React.FC = ({ children }) => <Text code>{children}</Text>
const Item: React.FC<{ name: string }> = ({ name, children }) => (
  <>
    <Text>{name}:</Text>
    <Code>{children}</Code>
  </>
)

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>lexstep-auth0-client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>LEXSTEP.com Authorization</Title>
        <Paragraph>
          environment variables are:
          <ul>
            {Object.keys(variables).map((key) => (
              <li key={key}>
                <Item name={key}>{`${variables[key]}`}</Item>
              </li>
            ))}
          </ul>
        </Paragraph>
        <Example />
      </main>
    </div>
  )
}

export default Home
