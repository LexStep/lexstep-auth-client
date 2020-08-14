import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'

const Auth0Wrapper: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN ?? 'DOMAIN'}
      clientId={process.env.AUTH0_CLIENT_ID ?? 'CLIENT_ID'}
      redirectUri={process.env.AUTH0_REDIRECT_URI ?? 'http://localhost:3000'}
      audience={process.env.AUTH0_AUDIENCE}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0Wrapper
