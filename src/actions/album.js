import type { LoginReqData } from '../types/index'
import { API } from '../constants/API'
import {
  GET_PHOTOS,
  CLOSE_PREVIEW_PHOTO_DIALOG,
  OPEN_PREVIEW_PHOTO_DIALOG,
} from './constants'


export const requestPhotos = (data: Object) => ({
  type: GET_PHOTOS,
  request: {
    method: 'GET',
    url: API.GET_PHOTOS(data.user_id),
  }
})

export const closePreviewPhotoDialog = () => ({
  type: CLOSE_PREVIEW_PHOTO_DIALOG,
})

export const openPreviewPhotoDialog = (link: string) => ({
  type: OPEN_PREVIEW_PHOTO_DIALOG,
  link,
})