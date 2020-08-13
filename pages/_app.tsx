import '../styles/antd.less'

import React from 'react'

interface MyAppProps {
  Component: React.ReactType
  pageProps: any
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
