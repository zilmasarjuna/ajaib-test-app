import {
  LIST_USER_REQUEST,
  LIST_USER_SUCCESS,
  LIST_USER_FAILURE,
} from 'app/constants/type'

const initialState = {
  isFetching: true,
  data: [],
  error: null,
  pagination: null,
  request: null,
}

export default function user(state = initialState, action) {
  switch(action.type) {
    case LIST_USER_REQUEST:
      return {
        ...initialState,
        request: action.request,
      }
    case LIST_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data.results,
        error: null,
      }
    case LIST_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: action.error,
      }
    default: 
      return state
  }
}