import React from 'react'
import styled from 'styled-components'

import FilterBar from './components/FilterBar'
import ListUser from './components/ListUser'

import Container from 'app/components/Container/Container'

const UserList = () => {
  return (
    <Container>
      <Wrapper>
        <FilterBar />
        <ListUser />
      </Wrapper>
    </Container>
  )
}

export default UserList

const Wrapper = styled.div`
  margin-top: 1rem;
`
