// @flow

import React from 'react'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles/index'
import CircularProgress from '@material-ui/core/CircularProgress'
import {
  button as styles,
  whiteButton,
  whiteSlimButton,
  slimRedButton,
  blueSlimButton,
  slimGreenButton,
  smallButton,
} from './style'

type Props = {
  label: string,
  classes: Object,
  disabled: boolean,
  isLoading: boolean,
  style: ?Object,
  variant: ?string,
  type: ?string,
  smLoader: boolean,
  onClick: () => void
}

export const defaultButton = ({
  label, classes, disabled, isLoading, style, onClick, smLoader,
  variant, type
}: Props) => (
  <Button
    disabled={disabled || isLoading}
    className={classNames({
      [classes.button]: true,
      [classes.loader]: isLoading,
    })}
    variant={variant || 'contained'}
    type={type || 'submit'}
    style={style}
    onClick={onClick}
  >
    {isLoading
      ? (
        <div>
          <CircularProgress
            size={smLoader ? 15 : 25}
            classes={{
              root: classes.label,
            }}
            color="inherit"
          />
          {classes.hide
            && (
            <div
              className={classNames({
                [classes.label]: true,
                [classes.hide]: isLoading,
              })}
            >
              {label}
            </div>
            )
        }
        </div>
      )
      : <span className={classes.label}>{label}</span>
    }
  </Button>
)

export const StyledButton = withStyles(styles)(defaultButton)
export const SmallStyledButton = withStyles(smallButton)(defaultButton)
export const WhiteButton = withStyles(whiteButton)(defaultButton)
export const WhiteSlimButton = withStyles(whiteSlimButton)(defaultButton)
export const BlueSlimButton = withStyles(blueSlimButton)(defaultButton)
export const SlimRedButton = withStyles(slimRedButton)(defaultButton)
export const SlimGreenButton = withStyles(slimGreenButton)(defaultButton)
