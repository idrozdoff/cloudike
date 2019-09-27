import {
  put,
  take,
} from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { logout } from '../../actions/login'

export function* logoutSaga() {
  yield take('persist/REHYDRATE')
  yield put(logout())
  yield put(push('/login'))
}
