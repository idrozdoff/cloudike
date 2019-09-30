// @flow

import React from 'react'
import injectSheet from 'react-jss'
import Grid from '@material-ui/core/Grid'
import { style } from './style'
import { API } from '../../constants/API'

type Props = {
  photos: any,
  user_id: Number,
}

@injectSheet(style)
export class AlbumPresenter extends React.Component<Props, void> {
  render() {
    const { classes, photos, user_id } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.list}>
          {photos.length ? photos.map((item) => (
            <div>
              {console.log(item)}
              <img alt="logo" src={item._links.image_preview.href} />
            </div>
          ))
        :
          <div>
            Альбом пуст
          </div>
        }
        </div>
      </div>
    )
  }
}
