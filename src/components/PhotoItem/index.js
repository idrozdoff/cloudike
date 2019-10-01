// @flow

import React, { Fragment } from 'react'
import injectSheet from 'react-jss'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom'
import { style } from './style'
import { API } from '../../constants/API'
import { dateFormat } from '../../utils'

type Props = {
  photos: any,
  user_id: Number,
  openPreviewPhotoDialog: Function,
  item: Object,
  match: Object,
}

@injectSheet(style)
export class PhotoItem extends React.Component<Props, void> {
  openDialog = () => {
    const { openPreviewPhotoDialog, item } = this.props
    openPreviewPhotoDialog(item._links.image_preview.href)
  }

  render() {
    const {
      classes,
      photos,
      user_id,
      openPreviewPhotoDialog,
      item,
      match,
    } = this.props

    return (
      <Card className={classes.card}>
        <CardActionArea
          onClick={this.openDialog}
          className={classes.cardActionArea}
        >
          <CardMedia
            className={classes.media}
            image={item._links.image_preview.href}
            title={`photo: ${item.id}`}
          />
        </CardActionArea>
      </Card>
    )
  }
}
