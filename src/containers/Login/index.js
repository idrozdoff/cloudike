// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'

import LoginForm from '../../components/LoginForm/login'
import { style } from './style'
import loginImg from '../../images/logo1.png'
import { StyledErrorBlock } from '../../components/ErrorBlock'

import type { Props } from './type'

const mapStateToProps = state => ({
  error: (state.login.error && state.login.error.details),
})

const mapDispatchToProps = dispatch => ({
})


@withStyles(style)
@connect(mapStateToProps, mapDispatchToProps)
export class Login extends React.Component< Props, void> {
  render() {
    const { classes, error } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img src={loginImg} className={classes.image} alt="login" />
          </div>
          <div className={classes.title}>
            Sign In
          </div>
          <div className={classes.form}>
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}
