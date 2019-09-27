import { put, all, takeEvery } from 'redux-saga/effects'
import { success } from 'redux-saga-requests'
import { push } from 'react-router-redux'

import { LOGIN } from '../actions/constants'

function* handleLoginOnSuccess(action) {
  return yield put(push('/album'))
}

export function* loginSaga() {
  yield all([
    takeEvery(success(LOGIN), handleLoginOnSuccess),
  ])
}
