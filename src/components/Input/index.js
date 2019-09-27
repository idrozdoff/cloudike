// @flow

import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import type { FieldProps } from 'redux-form'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withStyles } from '@material-ui/core/styles/index'


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

export const defaultInputWrap = ({
  label, type, input, classes, autoComplete, startAdornment, style,
  meta: { touched, error }, autoFocus, placeholder, multiline, disabled
}: Props) => (
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
      type={type}
      multiline={multiline}
      classes={{
        input: classes.textFieldInput,
        inkbar: classes.inputInkbar,
        disabled: classes.disabled,
      }}
    />
    <FormHelperText className={classes.error}>{touched && ((error && <span>{error}</span>))}</FormHelperText>
  </FormControl>
)

export const defaultInput = withStyles(styleInput)(defaultInputWrap)
