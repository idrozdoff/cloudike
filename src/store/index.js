// @flow

import {
  createStore, applyMiddleware, combineReducers, compose
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form'
import { createLogger } from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import * as reducers from '../reducers'
import { rootSaga } from '../sagas'
import { mainRouterSaga } from '../sagas/sagas-router'


export const history = createHistory()

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['auth']
}
const routingMiddleware = routerMiddleware(history)
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
  form: formReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const configureStore = (initialState: {} = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [
    sagaMiddleware,
    routingMiddleware,
  ]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
  sagaMiddleware.run(rootSaga)
  sagaMiddleware.run(mainRouterSaga)

  const persistor = persistStore(store)

  return { store, persistor }
}

export const { store, persistor } = configureStore()
