import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'antd'
import React from 'react'

const LoginButton: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const handleClick = async () => {
    if (isAuthenticated) {
      return logout()
    }

    return loginWithRedirect({ screen_hint: 'signup' })
  }

  return (
    <Button type={isAuthenticated ? 'danger' : 'primary'} onClick={handleClick}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </Button>
  )
}

export default LoginButton
