// @flow

import { select } from 'redux-saga/effects'
import
{
  ifElse,
  is,
  always,
  propSatisfies,
  T,
  cond
} from 'ramda'
import { ADD_IMAGE } from '../actions/constants'


const defaultHeaders = {
  'Content-Type': 'application/json',
}

const makeHeaders = (token) => ifElse(
  is(String),
  t => ({ ...defaultHeaders, 'Mountbit-Auth': t }),
  always({ ...defaultHeaders }),
)(token)


export const is40x = propSatisfies(status => status >= 400 && status <= 499, 'status')
export const is50x = propSatisfies(status => status >= 500 && status <= 599, 'status')

const on50x = async (response: Response) => {
  let text = ''
  try {
    text = await response.text()
  } catch (e) {
    //
  }
  return {
    detail: 'There was a server error, please try again',
    text,
  }
}

const makeErrorDetail = (error) => {
  const errMsg = error.error && error.error.toString()
  return error.detail || errMsg
}

const on40x = async (response: any) => {
  let result = {}

  if (response.data) {
    result = { ...response.data }
  } else {
    result = {
      detail: 'There was an error, please try again',
    }
  }

  return {
    ...result,
    detail: makeErrorDetail(result),
  }
}

const onUnknow = () => ({
  detail: 'There was an error, please try again',
})

export const prepareResponse = cond([
  [is40x, on40x],
  [is50x, on50x],
  [T, onUnknow],
])

export function* onRequest(request: any, action: any): any {
  const { auth } = yield select()
  const headers = (action.type !== ADD_IMAGE) ? makeHeaders(auth.token) : {
    'Content-Type': 'image/jpeg'
  }
  return { ...request, headers }
}

export function onSuccess(response: any): any {
  return { ...response }
}

const makeError = (error) => {
  if (error.detail) {
    return error.detail
  }
  const nonFieldError = (error && error.non_field_errors) || []
  if (nonFieldError && nonFieldError[0]) {
    return nonFieldError[0]
  }
  const venue = (error && error.venue) || []
  if (venue && venue[0]) {
    return venue[0]
  }
  return ''
}

export async function onError(response: any): any {
  const data = await prepareResponse(response)
  return {
    error: {
      status: response.status,
      details: makeError(data),
      data,
    }
  }
}
