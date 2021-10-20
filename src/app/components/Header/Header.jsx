import React from 'react'
import styled from 'styled-components'

import { Layout } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header>
      <Logo>
        <Link to="/">Ajaib App</Link>
      </Logo>
    </Header>
  )
}

export default HeaderComponent

const Logo = styled.div`
  a {
    color: #fff
  }
`