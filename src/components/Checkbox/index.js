// @flow

import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles/index'
import { styleCheckbox } from './style'

type Props = {
  label: string,
  checked: boolean,
  disabled: ?boolean,
  isLoading: ?boolean,
  input: any,
  onChange: (event: Object, checked: boolean) => void,
}

const defaultCheckbox = ({
  label, checked, disabled, isLoading, onChange, input
}: Props) => (
  <FormControlLabel
    control={(
      <Checkbox
        checked={checked || (input && input.value)}
        disabled={disabled || isLoading}
        onChange={onChange || (input && input.onChange)}
        color="primary"
      />
)}
    label={isLoading ? 'Operation in process...' : label}
  />
)

export const StyledCheckbox = withStyles(styleCheckbox)(defaultCheckbox)
