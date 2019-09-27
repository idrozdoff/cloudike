// @flow

import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import SelectPro from 'react-select'

import type { FormProps } from 'redux-form'
import { style } from './style'


type Props = FormProps


@withStyles(style)
export class Select extends Component< Props, void> {
  componentDidMount() {
    this.props.input.onChange({
      value: this.props.input.value,
      label: (this.props.options.filter(item => item.value === this.props.input.value)[0]
      || {}).label || this.props.input.value,
    })
  }

  render() {
    const {
      placeholder, input,
      options,
    } = this.props
    return (
      <SelectPro
        {...input}
        isClearable={false}
        isSearchable={false}
        onBlur={() => {}} // don't remove!!!!
        placeholder={placeholder}
        options={options}
      />
    )
  }
}
