import { Card, Typography } from 'antd'
import React from 'react'

const { Text } = Typography
const Code: React.FC = ({ children }) => <Text code>{children}</Text>
const Item: React.FC<{ name: string }> = ({ name, children }) => (
  <>
    <Text>{name}:</Text>
    <Code>{children}</Code>
  </>
)

type StringMap = {
  [key: string]: string | undefined
}

/* eslint-disable prefer-destructuring */
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET
/* eslint-enable prefer-destructuring */

const variables: StringMap = {
  Domain: AUTH0_DOMAIN,
  'Client ID': AUTH0_CLIENT_ID,
  'Client Secret': AUTH0_CLIENT_SECRET,
}

const Credentials: React.FC = () => (
  <Card title="Supplied Credentials" size="small" style={{ width: 450 }}>
    <p>The credentials supplied are:</p>
    <ul>
      {Object.keys(variables).map((key) => (
        <li key={key}>
          <Item name={key}>{`${variables[key]}`}</Item>
        </li>
      ))}
    </ul>
    <p>
      If these are not as expected, please enter them in{' '}
      <Text code>.env.local</Text>
    </p>
  </Card>
)

export default Credentials
