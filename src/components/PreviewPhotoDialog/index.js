// @flow

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Dialog } from '@material-ui/core'
import { style } from './style'
import { SlimGreenButton, SlimRedButton } from '../Button'

type Props = {
  closeDialog: Function,
  opened: boolean,
  classes: Object,
  toggleAgree: Function,
  link: string,
}

@withStyles(style)
export class PreviewPhotoDialog extends Component<Props, void> {
  static defaultProps = {
    classes: {},
  }

  handleClickAgree = () => {
    this.props.toggleAgree()
    this.props.closeDialog()
  }

  render() {
    const {
      classes,
      closeDialog,
      opened,
      link,
    } = this.props

    return (
      <Dialog
        maxWidth={false}
        fullWidth={false}
        open={opened}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.container}>
          <img src={link} className={classes.image} alt="preview"/>
        </div>
      </Dialog>
    )
  }
}
