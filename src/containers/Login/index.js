// @flow

import React from 'react'
import injectSheet from 'react-jss'
import Grid from '@material-ui/core/Grid'

import LoginForm from '../../components/LoginForm/login'
import { style } from './style'
import loginImg from '../../images/logo1.png'

import type { Props } from './type'

@injectSheet(style)
export class Login extends React.Component< Props, void> {
  render() {
    const { classes } = this.props
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
