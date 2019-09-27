// @flow

import typeToReducer from 'type-to-reducer'
import { requestsReducer } from 'redux-saga-requests'
import {
  LOGIN, LOGOUT,
} from '../actions/constants'

const emptyUser: Object = {
  pending: 0,
  error: {}
}

const initialState: Object = emptyUser

const authRequcer = typeToReducer({
}, initialState)

const onSuccess = () => ({
  ...initialState,
})

const onError = (state, action) => {
  const newState = {
    ...state,
    error: {
      details: action.error.data.non_field_errors[0]
    },
    pending: state.pending - 1,
  }
  if (action.error.status === 500) {
    newState.error.details = 'There was a network error, please try again'
  }
  return newState
}


const loginReducer = requestsReducer(
  {
    actionType: LOGIN,
    resetOn: [LOGOUT],
    onSuccess,
    onError,
  },
  authRequcer
)

export const login = requestsReducer(
  {
    actionType: LOGIN,
    resetOn: [LOGOUT],
    onSuccess,
    onError,
  },
  loginReducer
)
