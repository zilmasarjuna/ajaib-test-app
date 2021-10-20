import user_host from 'app/axios/user_host'
import queryString from 'query-string'

import {
  LIST_USER_FAILURE,
  LIST_USER_REQUEST,
  LIST_USER_SUCCESS,
} from 'app/constants/type'

export const listUserRequest = (request) => ({
  type:LIST_USER_REQUEST,
  request: request
})

export const listUserSuccess = (data) => ({
  type:LIST_USER_SUCCESS,
  data,
})

export const listUserFailure = error => ({
  type:LIST_USER_FAILURE,
  error,
})

export const fetchListUser = (params = {}) => {
  return (dispatch) => {
    dispatch(listUserRequest(params))


    const qString = queryString.stringify({
      ...params,
      results: 10,
      pageSize: 5,
    })

    return user_host.get(`/?`+qString).then(res => {
      dispatch(listUserSuccess(res.data))
    }).catch(err => {
      dispatch(listUserFailure(err))
    })
  }
}
