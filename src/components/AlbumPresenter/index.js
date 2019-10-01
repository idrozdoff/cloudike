// @flow

import React, { Fragment } from 'react'
import injectSheet from 'react-jss'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import { style } from './style'
import { API } from '../../constants/API'
import { dateFormat } from '../../utils'

type Props = {
  photos: any,
  user_id: Number,
}

@injectSheet(style)
export class AlbumPresenter extends React.Component<Props, void> {
  render() {
    const { classes, photos, user_id } = this.props
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
          <Fragment>
            <div className={classes.date}>
              {date}
            </div>
            <div className={classes.list}>
              {sortedPhotos[index].map(item => (
                <Card key={item.id} className={classes.card}>
                  <CardActionArea
                    // onClick={this.handleClick}
                    className={classes.cardActionArea}
                  >
                    <CardMedia
                      className={classes.media}
                      image={item._links.image_preview.href}
                      title={`photo: ${item.id}`}
                    />
                  </CardActionArea>
                </Card>
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
