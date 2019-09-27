// @flow
import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles/index'
import CircularProgress from '@material-ui/core/CircularProgress'
import { style } from './style'

type Classes = {|
  container: string,
  progress: string,
|}

type Props = {|
  isLoading: boolean,
  children: Object,
  classes: Classes,
|}

export const DefaultLoader = ({
  isLoading, children, classes
}: Props) => (
  <Fragment>
    {isLoading ? (
      <div className={classes.container}>
        <CircularProgress className={classes.progress} />
      </div>
    )
      : (
        <Fragment>
          { children }
        </Fragment>
      )
    }
  </Fragment>
)

export const Loader = withStyles(style)(DefaultLoader)
