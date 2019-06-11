import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import {createBrowserHistory as createHistory} from 'history'
import reducer from '../reducers'

export const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunk]

if (process.env.NODE_ENV === `development`) {
  const createLogger = require('redux-logger').createLogger

  const logger = createLogger({
    predicate: (getState, action) => !action.type.includes('@@redux-form')
  })

  middlewares.push(logger)
}

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      ...middlewares
    )
  )
)

export default store