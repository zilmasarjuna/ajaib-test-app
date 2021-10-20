import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectListUser } from 'app/selector/user'

import { fetchListUser } from 'app/actions/user'

const useUser = () => {
  const listUser = useSelector(selectListUser)
  const dispatch = useDispatch()
  
  const handleFetch = (params) => {
    dispatch(fetchListUser(params))
  }

  React.useEffect(() => {
    dispatch(fetchListUser({
      page: 1
    }))
  }, [dispatch])

  return {listUser, handleFetch}
}


export default useUser