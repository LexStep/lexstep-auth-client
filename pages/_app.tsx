import '../styles/antd.less'

import React from 'react'

import Auth0Wrapper from '../features/auth/auth0-wrapper'
import CustomLayout from '../features/layout/custom-layout'

interface MyAppProps {
  Component: React.ReactType
  pageProps: any
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Auth0Wrapper>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </Auth0Wrapper>
  )
}

export default MyApp
