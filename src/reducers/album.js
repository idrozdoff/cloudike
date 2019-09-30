// @flow

import typeToReducer from 'type-to-reducer'
import { requestsReducer } from 'redux-saga-requests'
import {
  GET_PHOTOS
} from '../actions/constants'

const emptyAlbum: Object = {
  pending: 0,
  photos: {},
  error: {}
}

const initialState: Object = emptyAlbum

const albumRequcer = typeToReducer({
}, initialState)

const onSuccess = (state, action) => ({
  ...state,
  photos: action.data._embedded.items,
  pending: state.pending - 1,
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


export const album = requestsReducer(
  {
    actionType: GET_PHOTOS,
    onSuccess,
    onError,
  },
  albumRequcer
)
