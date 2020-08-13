import '../styles/antd.less'

import { Layout } from 'antd'
import React from 'react'

const { Header, Footer, Content } = Layout

interface MyAppProps {
  Component: React.ReactType
  pageProps: any
}

const CustomLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ display: 'flex', minHeight: '100vh' }}>
      <Header className="header" style={{ color: '#fff' }}>
        <strong>LEXSTEP.com Authorization Tool</strong>
      </Header>
      <Content style={{ padding: '12pt' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  )
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  )
}

export default MyApp
