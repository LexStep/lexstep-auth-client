import { IdToken, useAuth0 } from '@auth0/auth0-react'
import { Card, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

import LoginButton from './login-button'

const { Text } = Typography

const Token: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <Card title={name}>
      <Text code copyable>
        {children}
      </Text>
    </Card>
  )
}

export interface IDTokenClaims {
  __raw: string
  nickname: string
  name: string
  picture: string
  updated_at: string
  email: string
  email_verified: string
  iss: string
  sub: string
  aud: string
  iat: string
  exp: string
  nonce: string
}

const Claims: React.FC<{ claims: IdToken }> = ({ claims }) => {
  const claimsWithoutRaw = { ...claims }
  delete claimsWithoutRaw.__raw

  const keys = Object.keys(claimsWithoutRaw)

  return (
    <Card title="Token Claims">
      <ul>
        {keys.map((key) => (
          <li key={key}>
            <Text>{`${key}`}:</Text>
            <Text code copyable>{`${claimsWithoutRaw[key]}`}</Text>
          </li>
        ))}
      </ul>
    </Card>
  )
}

const LoggedIn: React.FC<{
  token?: string
  claims?: IdToken
}> = ({ token, claims }) => {
  const idToken = claims?.__raw

  return (
    <Space size="large" direction="vertical" style={{ maxWidth: '80vw' }}>
      {token && <Token name="Access Token">{token}</Token>}
      {idToken && <Token name="ID Token">{idToken}</Token>}
      {claims && <Claims claims={claims} />}
      <LoginButton />
    </Space>
  )
}

const LoggedOut: React.FC = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <>
      <p>Logged Out</p>
      <p>
        Please <a onClick={async () => loginWithRedirect()}>log in</a> to
        continue
      </p>
    </>
  )
}

const TokenDisplay: React.FC = () => {
  const {
    isAuthenticated,
    error,
    getIdTokenClaims,
    getAccessTokenSilently,
  } = useAuth0()

  const [claims, setClaims] = useState<IdToken>()
  const [accessToken, setAccessToken] = useState<string>()

  useEffect(() => {
    ;(async () => {
      try {
        const currentClaims = await getIdTokenClaims()

        setClaims(currentClaims)
      } catch (tokenError) {
        console.error(tokenError)
      }
    })()
  }, [getIdTokenClaims])

  useEffect(() => {
    ;(async () => {
      try {
        const token = await getAccessTokenSilently()

        setAccessToken(token)
      } catch (tokenError) {
        console.error(tokenError)
      }
    })()
  }, [getAccessTokenSilently])

  return (
    <>
      {error && <p>error {error}</p>}
      {isAuthenticated ? (
        <LoggedIn token={accessToken} claims={claims} />
      ) : (
        <LoggedOut />
      )}
    </>
  )
}

export default TokenDisplay
