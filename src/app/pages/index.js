import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from 'app/components/Header/Header'

import UserList from './UserList'

const PageRoute = () => {
  return (
    <>
      <Header />
      <React.Suspense fallback="Loading">
        <Switch>
          <Route exact path="/" component={UserList} />
        </Switch>
      </React.Suspense>
    </>
  )
}

export default PageRoute