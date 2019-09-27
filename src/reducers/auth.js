// @flow

import typeToReducer from 'type-to-reducer'
import { success } from 'redux-saga-requests'
import {
  LOGIN,
  LOGOUT,
  LOGIN_BY_PHONE,
} from '../actions/constants'

import type { User } from '../types'

const emptyUser: User = {
  pending: 0,
  token: null,
  user_id: 0,
  name: '',
  id: null,
  created: 0,
  expires: 0,
  device_description: '',
  offer_url: '',
  user_eid: 0,
  userid: 0,
}

const initialState: User = emptyUser

const onSuccess = (state, action) => ({
  ...state,
  pending: 0,
  token: action.token,
  user_id: action.user_id,
  name: action.name,
  id: action.id,
  created: action.created,
  expires: action.expires,
  device_description: action.device_description,
  offer_url: action.offer_url,
  user_eid: action.user_eid,
  userid: action.userid,
})

export const auth = typeToReducer({
  [success(LOGIN)]: onSuccess,
  [success(LOGIN_BY_PHONE)]: onSuccess,
  [LOGOUT]: () => ({ ...initialState }),
}, initialState)
