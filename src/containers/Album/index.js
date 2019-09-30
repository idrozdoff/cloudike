// @flow

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { AlbumPresenter } from '../../components/AlbumPresenter'
import { Loader } from '../../components/Loader'
import { requestPhotos } from '../../actions/album'

type Props = {
  fetchPhotos: Function,
  photos: any,
  isLoading: boolean,
  user_id: Number,
}

const mapStateToProps = state => ({
  photos: state.album.photos || [],
  isLoading: !!state.album.pending || false,
  user_id: state.auth.userid || 0,
})

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (user) => dispatch(requestPhotos(user))
})

@connect(mapStateToProps, mapDispatchToProps)
export class Album extends React.Component< Props, void> {
  componentDidMount() {
    const { fetchPhotos, user_id } = this.props
    fetchPhotos({ user_id })
  }
  render() {
    const { isLoading, photos, user_id } = this.props
    return (
      <Fragment>
        <Loader isLoading={isLoading}>
          <AlbumPresenter photos={photos} user_id={user_id} />
        </Loader>
      </Fragment>
    )
  }
}
