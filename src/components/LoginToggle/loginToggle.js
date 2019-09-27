// @flow

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { StyledButton, SmallStyledButton } from '../Button'
import { style } from './style'


type Props = {
  classes: Object,
  handleToggle: Function,
  enterMethod: boolean,
}


@withStyles(style)
export class LoginToggle extends Component< Props, void> {
  render() {
    const {
      classes, handleToggle, enterMethod,
    } = this.props
    return (
      <div className={classes.wrapperToggle}>
        <div className={classes.toggleButton}>
          <SmallStyledButton
            type="button"
            label="Email"
            disabled={enterMethod}
            onClick={handleToggle}
          />
        </div>
        <div className={classes.toggleButton}>
          <SmallStyledButton
            type="button"
            label="Phone"
            disabled={!enterMethod}
            onClick={handleToggle}
          />
        </div>
      </div>
    )
  }
}
