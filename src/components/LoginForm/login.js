// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import {
  required,
  format,
  length,
  email
} from 'redux-form-validators'

import type { FormProps, untouch } from 'redux-form'
import { style } from './style'
import { PasswordInput } from '../Input/PasswordInput'
import { login, loginByPhone } from '../../actions/login'
import { defaultInput } from '../Input'
import { StyledButton, SmallStyledButton } from '../Button'
import { StyledErrorBlock } from '../ErrorBlock'
import { linkSignUp } from '../../utils/constants'
import { LoginToggle } from '../LoginToggle/loginToggle'

type Props = FormProps

const mapStateToProps = state => ({
  isLoading: !!state.login.pending,
  errorText: (state.login.error && state.login.error.details) ? state.login.error.details : '',
})

const mapDispatchToProps = dispatch => ({
  loginUser: (data) => dispatch(login(data)),
  loginByPhoneUser: (data) => dispatch(loginByPhone(data)),
})


@withStyles(style)
@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({
  form: 'login'
})
class LoginForm extends Component< Props, void> {
  state = {
    useEmail: true, // else phone
  }

  changeEnterMethod = () => {
    this.props.change("email", '')
    this.props.change("phone", '')
    this.props.untouch("email")
    this.props.untouch("phone")
    this.setState(state => ({ useEmail: !state.useEmail }))
  }

  render() {
    const {
      useEmail
    } = this.state

    const {
      classes,
      handleSubmit,
      loginUser,
      isLoading,
      errorText,
      loginByPhoneUser,
    } = this.props

    return (
      <form onSubmit={handleSubmit(useEmail ? loginUser : loginByPhoneUser)}>
        <StyledErrorBlock label={errorText} />
        <LoginToggle handleToggle={this.changeEnterMethod} enterMethod={useEmail} />
        <div className={classes.wrapInput}>
          {useEmail ? 
            <Field
              className={classes.input}
              name="email"
              type="email"
              label="Email"
              validate={[required(), email(), length({ max: 150 })]}
              required
              component={defaultInput}
            />
            :
            <Field
              className={classes.input}
              name="phone"
              type="text"
              label="Phone"
              validate={
                format({ with: /^(0|[1-9][0-9]{9})$/i, message: 'Invalid phone number, must be 10 digits'})
              }
              required
              component={defaultInput}
            />
          }
        </div>
        <div className={classes.wrapInput}>
          <Field
            className={classes.input}
            type="password"
            name="password"
            label="Password"
            validate={[required(), length({ max: 255 })]}
            required
            component={PasswordInput}
          />
        </div>
        <div className={classes.link}>
          Don't have an account yet?
          <a
            className={classes.link}
            href={linkSignUp}
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign Up Here
          </a>
        </div>
        <div className={classes.wrapperButton}>
          <StyledButton
            isLoading={isLoading}
            type="submit"
            className={classes.button}
            label="Sign in"
          />
        </div>
      </form>
    )
  }
}

export default LoginForm
