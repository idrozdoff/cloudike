// @flow

import React, { Fragment } from 'react'
import injectSheet from 'react-jss'
import { style } from './style'
import { API } from '../../constants/API'
import { dateFormat } from '../../utils'
import { PhotoItem } from '../PhotoItem'

type Props = {
  photos: any,
  user_id: Number,
  openPreviewPhotoDialog: Function,
  path: Object,
}

@injectSheet(style)
export class AlbumPresenter extends React.Component<Props, void> {
  openDialog = (link: string) => {
    const { openPreviewPhotoDialog } = this.props
    openPreviewPhotoDialog(link)
  }

  render() {
    const {
      classes,
      photos,
      user_id,
      openPreviewPhotoDialog,
      path,
    } = this.props
    const uniqueDates = Array.from(new Set(
        photos.length ? photos.map(i => (dateFormat(new Date(i.created)))) : []
      )
    )
    const sortedPhotos = uniqueDates.map(date => (
        photos.filter(photo => (dateFormat(new Date(photo.created)) === date))
      )
    )
    return (
      <div className={classes.container}>
        {photos.length ? uniqueDates.map((date, index) => (
          <Fragment key={date}>
            <div className={classes.date}>
              {date}
            </div>
            <div className={classes.list}>
              {sortedPhotos[index].map(item => (
                <PhotoItem
                  key={item.id}
                  item={ item || {} }
                  openPreviewPhotoDialog={openPreviewPhotoDialog}
                  match={path}
                />
              ))}
            </div>
          </Fragment>
        ))
      :
        <div className={classes.emptyAlbum}>
          <div>
            There aren't photos.           
            <a
              className={classes.link}
              href=""
            >
              Add photo
            </a>
          </div>
        </div>
      }
    </div>
    )
  }
}
