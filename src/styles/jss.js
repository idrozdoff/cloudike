// @flow

import { getFontFaces } from '../utils'
import { constantStyle } from './constant'

export const jssStyle = {
  '@global': {
    '@font-face': getFontFaces(),
    body: {
      fontFamily: 'Helvetica',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    }
  }
}

export const jssTheme = {
  ...constantStyle,
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiTypography: {
      body2: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: '20px',
      },
    },
    MuiTouchRipple: {
      root: {
        color: '#AAAAAA'
      }
    },
    MuiInputBase: {
      inputType: {
        height: 'auto',
      },
    },
    MuiLinearProgress: {
      root: {
        height: 3,
      },
      barColorPrimary: {
        backgroundColor: '#1B7ADD',
      },
    },
  },
}
