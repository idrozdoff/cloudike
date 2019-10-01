// @flow

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { Route, Switch } from 'react-router-dom'
import { ModalRoute } from 'react-router-modal'
import { AlbumPresenter } from '../../components/AlbumPresenter'
import { Loader } from '../../components/Loader'
import { PreviewPhotoDialogContainer } from '../PreviewPhotoDialogContainer'
import {
  requestPhotos,
  closePreviewPhotoDialog,
  openPreviewPhotoDialog,
} from '../../actions/album'

type Props = {
  fetchPhotos: Function,
  photos: any,
  isLoading: boolean,
  user_id: Number,
  opened: boolean,
  currentPhoto: string,
}

const mapStateToProps = state => ({
  photos: state.album.photos || [],
  isLoading: !!state.album.pending || false,
  user_id: state.auth.userid || 0,
  opened: state.album.openedPreview,
  currentPhoto: state.album.currentPhoto,
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (user) => dispatch(requestPhotos(user)),
  closeDialog: () => dispatch(closePreviewPhotoDialog()),
  openDialog: (link) => dispatch(openPreviewPhotoDialog(link)),
})

@connect(mapStateToProps, mapDispatchToProps)
export class Album extends React.Component< Props, void> {
  componentDidMount() {
    const { fetchPhotos, user_id } = this.props
    fetchPhotos({ user_id })
  }
  render() {
    const {
      isLoading,
      photos,
      user_id,
      opened,
      closeDialog,
      currentPhoto,
      openDialog,
      match,
    } = this.props
    return (
      <Fragment>
        <Loader isLoading={isLoading}>
          <AlbumPresenter
            photos={photos}
            user_id={user_id}
            openPreviewPhotoDialog={openDialog}
            path={match}
          />
        </Loader>
        <PreviewPhotoDialogContainer />
      </Fragment>
    )
  }
}
