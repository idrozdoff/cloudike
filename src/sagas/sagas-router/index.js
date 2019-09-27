// @flow

import type { Saga } from 'redux-saga'

import { fork } from 'redux-saga/effects'
import { router } from 'redux-saga-router'
import { history } from '../../store'
import { logoutSaga } from './logout'

const routes = {
  '/logout': logoutSaga,
}

export function* mainRouterSaga(): Saga<void> {
  yield fork(router, history, routes)
}
