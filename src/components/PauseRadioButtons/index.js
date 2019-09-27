// @flow

import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles/index'
import { styleRadioButtons } from './style'

type Props = {
  classes: Object,
  input: any,
  name: string,
  isPaused: boolean,
}

type State = {
  value: string,
  valueInput: boolean,
}

@withStyles(styleRadioButtons)
export class PauseRadioButtons extends Component<Props, State> {
  state={
    value: 'LIVE',
    valueInput: false,
  }

  componentDidMount() {
    if (this.props.isPaused) {
      this.setState({ value: 'PAUSED', valueInput: true })
    } else this.setState({ value: 'LIVE', valueInput: false })
  }

  handleChange = (event: any) => {
    if (event.target.value === 'LIVE') {
      this.setState({ value: event.target.value, valueInput: false })
      this.props.input.onChange(false)
    }
    if (event.target.value === 'PAUSED') {
      this.setState({ value: event.target.value, valueInput: true })
      this.props.input.onChange(true)
    }
  }

  render() {
    const {
      classes, name, ...input
    } = this.props
    const {
      value, valueInput
    } = this.state

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className={classes.radioAreaTitle}>Deal Currently</FormLabel>
          <RadioGroup
            aria-label="Deal Currently"
            name="dealcurrently"
            className={classes.group}
            value={value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              className={classes.radioPoint}
              value="LIVE"
              control={<Radio color="primary" />}
              label="LIVE"
            />
            <FormControlLabel
              className={classes.radioPoint}
              value="PAUSED"
              control={<Radio color="primary" />}
              label="PAUSED"
            />
            <input hidden name={name} value={valueInput} />
          </RadioGroup>
        </FormControl>
      </div>)
  }
}
