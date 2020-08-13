import { Layout } from 'antd'
import React from 'react'

import LoginButton from '../auth/login-button'

const { Header, Footer, Content } = Layout

const HeaderTitle: React.FC = () => (
  <strong>LEXSTEP.com Authorization Tool</strong>
)

const Spacer: React.FC = () => <div style={{ flex: 1 }} />

const HeaderContents: React.FC = () => {
  return (
    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <HeaderTitle />
      <Spacer />
      <LoginButton />
    </div>
  )
}

const CustomLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ display: 'flex', minHeight: '100vh' }}>
      <Header className="header" style={{ color: '#fff' }}>
        <HeaderContents />
      </Header>
      <Content style={{ padding: '12pt' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  )
}

export default CustomLayout
