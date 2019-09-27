// @flow

import type { Saga } from 'redux-saga'
import 'isomorphic-fetch'
import { all } from 'redux-saga/effects'
import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-fetch'
import { onRequest, onSuccess, onError } from './helpers'
import { loginSaga } from './login'

const getMainURL = () => {
  const urls = {
    development: ' https://saas.cloudike.com/api',
    devserver: ' https://saas.cloudike.com/api',
    production: ' https://saas.cloudike.com/api',
  }
  return urls[process.env.NODE_ENV || 'development'] || urls.development
}

const baseURL = getMainURL()

export function* rootSaga(): Saga<void> {
  yield createRequestInstance(
    {
      driver: createDriver(
        window.fetch,
        {
          baseURL,
          AbortController: window.AbortController,
        }
      ),
      onRequest,
      onSuccess,
      onError,
    }
  )
  yield all([
    watchRequests(),
    loginSaga(),
  ])
}
