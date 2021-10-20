import React from 'react'
import styled from 'styled-components'

import { Spin } from 'antd';

const Loading = () => {
  return (
    <Wrapper>
      <Spin tip="Loading" style={{  margin: '0 auto'  }} />
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
  margin: 50px 0;
  text-align: center;
`