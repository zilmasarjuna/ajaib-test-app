import * as React from 'react'

const LazyList = React.lazy(() => import('./UserList'))

export default LazyList