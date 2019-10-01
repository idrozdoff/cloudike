// @flow

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { PreviewPhotoDialog } from '../../components/PreviewPhotoDialog'
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
  isLoading: !!state.album.pending || false,
  opened: state.album.openedPreview,
  currentPhoto: state.album.currentPhoto,
})

const mapDispatchToProps = dispatch => ({
  closeDialog: () => dispatch(closePreviewPhotoDialog()),
})

@connect(mapStateToProps, mapDispatchToProps)
export class PreviewPhotoDialogContainer extends React.Component< Props, void> {
  componentDidUpdate(){
    window.onpopstate  = (e) => {
      this.props.closeDialog()
   }
  }
  render() {
    const {
      opened,
      closeDialog,
      currentPhoto,
    } = this.props
    return (
      <PreviewPhotoDialog
        closeDialog={closeDialog}
        opened={opened}
        link={currentPhoto}
      />
    )
  }
}
