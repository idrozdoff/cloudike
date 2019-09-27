// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { style } from './style'

type Classes = {|
  container: string,
  label: string,
|}

type Props = {|
  label: string,
  classes: Classes,
|}

export const defaultErrorBlock = ({
  label, classes
}: Props) => (
  label
    ? (
      <div className={classes.container}>
        <div className={classes.label}>{label}</div>
      </div>
    ) : null
)

export const StyledErrorBlock = withStyles(style)(defaultErrorBlock)
