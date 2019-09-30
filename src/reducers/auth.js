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
  token: action.data.token,
  user_id: action.data.user_id,
  name: action.data.name,
  id: action.data.id,
  created: action.data.created,
  expires: action.data.expires,
  device_description: action.data.device_description,
  offer_url: action.data.offer_url,
  user_eid: action.data.user_eid,
  userid: action.data.userid,
})

export const auth = typeToReducer({
  [success(LOGIN)]: onSuccess,
  [success(LOGIN_BY_PHONE)]: onSuccess,
  [LOGOUT]: () => ({ ...initialState }),
}, initialState)
