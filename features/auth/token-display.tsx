import { useAuth0 } from '@auth0/auth0-react'
import { Card } from 'antd'
import React, { useEffect, useState } from 'react'

import LoginButton from './login-button'

const Token: React.FC = ({ children }) => {
  return <p>Token: {children}</p>
}

const LoggedIn: React.FC<{ token?: string; user: any }> = ({ token, user }) => {
  return (
    <>
      <p>Logged In</p>
      <p>User: {`${JSON.stringify(user)}`}</p>
      {token && <Token>{token}</Token>}
      <LoginButton />
    </>
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
  const { isAuthenticated, error, user, getAccessTokenSilently } = useAuth0()

  const [token, setToken] = useState<string>()

  useEffect(() => {
    ;(async () => {
      try {
        const currentToken = await getAccessTokenSilently({
          audience: process.env.AUTH0_AUDIENCE,
          // scope: 'read:posts',
        })

        setToken(currentToken)
      } catch (tokenError) {
        console.error(tokenError)
      }
    })()
  }, [getAccessTokenSilently])

  return (
    <Card title={isAuthenticated ? 'Logged In' : 'Logged Out'}>
      {error && <p>error {error}</p>}
      {isAuthenticated ? <LoggedIn user={user} token={token} /> : <LoggedOut />}
    </Card>
  )
}

export default TokenDisplay
