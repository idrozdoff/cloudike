import type { LoginReqData } from '../types/index'
import { API } from '../constants/API'
import { GET_PHOTOS } from './constants'


export const requestPhotos = (data: Object) => ({
  type: GET_PHOTOS,
  request: {
    method: 'GET',
    url: API.GET_PHOTOS(data.user_id),
  }
})