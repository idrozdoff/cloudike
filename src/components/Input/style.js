import { merge } from 'ramda'

const commonStyle = (theme) => ({
  formControl: {
    width: '100%',
  },
  textFieldInput: {
    color: theme.inputTextColor,
    fontSize: 18,
    padding: '10px 0',
  },
  textFieldFormLabel: {
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    }
  },
  hidePasswordIcon: {
    alignSelf: 'end'
  },
  error: {
    color: theme.palette.error.main
  },
  errorField: {
    '&:after': {
      backgroundColor: theme.palette.error.main,
    },
  }
})

export const styleInput = (theme) => merge(
  commonStyle(theme),
  {
    inputLabelFocused: {
      color: theme.inputColor,
    },

  }
)
