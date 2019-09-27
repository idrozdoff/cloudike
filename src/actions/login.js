// @flow

import type { LoginReqData } from '../types/index'
import { API } from '../constants/API'
import {
  LOGIN,
  LOGIN_BY_PHONE,
  LOGOUT,
} from './constants'


export const login = (data: LoginReqData) => ({
  type: LOGIN,
  request: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: API.LOGIN,
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  }
})

export const loginByPhone = (data: LoginReqData) => ({
  type: LOGIN,
  request: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: API.LOGIN_BY_PHONE,
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  }
})

export const logout = () => ({
  type: LOGOUT,
})
