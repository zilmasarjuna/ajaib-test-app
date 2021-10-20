import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { cacheEnhancer } from 'redux-cache'

import rootReducer from '../reducers'

const isDevelopment = process.env.REACT_APP_NODE_ENV === 'development'
const middleware = [thunk]
if (isDevelopment) {
  middleware.push(createLogger())
}

const enhancers = [applyMiddleware(...middleware)]

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, undefined, compose(...enhancers, cacheEnhancer()))
export default store