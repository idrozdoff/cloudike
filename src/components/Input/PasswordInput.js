// @flow

import React from 'react'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { withStyles } from '@material-ui/core/styles/index'
import type { FieldProps } from 'redux-form'


import { styleInput } from './style'

type Props = {
  classes: Object,
  label: string,
  type: string,
  autoComplete: boolean,
  placeholder: string,
  disabled: boolean,
  multiline: boolean,
  style: Object,
  autoFocus: boolean,
  startAdornment: boolean,
} & FieldProps

type State = {
  showPassword: boolean,
}

class BasePasswordInput extends React.Component<Props, State> {
  state = {
    showPassword: false,
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }))
  }

  render() {
    const {
      label, input, classes, autoComplete, startAdornment, style,
      meta: { touched, error }, autoFocus, placeholder, multiline, disabled
    } = this.props

    const {
      showPassword
    } = this.state

    const endAdornment = (
      <InputAdornment position="end">
        <IconButton
          aria-label="Toggle password visibility"
          onClick={this.handleClickShowPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    )

    return (
      <FormControl
        style={style}
        className={classes.formControl}
        disabled={disabled}
      >
        {label
          && (
          <InputLabel
            classes={{
              root: classes.label,
            }}
            htmlFor={input.name}
          >
              {label}
          </InputLabel>
          )
        }
        <Input
          error={Boolean(touched) && Boolean(error)}
          {...input}
          placeholder={placeholder}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          startAdornment={startAdornment}
          type={showPassword ? 'text' : 'password'}
          multiline={multiline}
          classes={{
            input: classes.textFieldInput,
            inkbar: classes.inputInkbar,
            disabled: classes.disabled,
          }}
          endAdornment={endAdornment}
        />
        <FormHelperText className={classes.error}>{touched && ((error && <span>{error}</span>))}</FormHelperText>
      </FormControl>
    )
  }
}

export const PasswordInput = withStyles(styleInput)(BasePasswordInput)
