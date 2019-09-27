
export const button = () => ({
  button: {
    padding: '20px 35px',
    borderRadius: 8,
    backgroundColor: '#51AFE0',
    // boxShadow: '0 2px 0 0 #00CC74',
    boxShadow: 'none',
    width: 'inherit',
    height: 'inherit',
    '&:disabled': {
      backgroundColor: '#F7F7F7',
      boxShadow: 'none',
      // boxShadow: '0 2px 0 0 #00CC74',
    },
    '&:hover': {
      backgroundColor: '#91CDFF',
      boxShadow: 'none',
      // boxShadow: '0 2px 0 0 #21B568',
      '&:disabled': {
        backgroundColor: '#F7F7F7',
        boxShadow: 'none',
        // boxShadow: '0 2px 0 0 #00CC74',
      },
    },
  },

  label: {
    color: '#000000',
    fontSize: 13,
    letterSpacing: 1.5,
    fontWeight: 'normal',
    paddingLeft: 16,
    paddingRight: 16,
  },

  loader: {
    padding: '14px 35px',
  },
  hide: {
    height: 0,
    overflow: 'hidden',
  },
})


export const whiteButton = () => ({
  ...button(),
  button: {
    ...button().button,
    // background-color: ;
    backgroundColor: '#FFFFFF',
    '&:disabled': {
      backgroundColor: '#ecebeb',
    },
    '&:hover': {
      backgroundColor: '#ecebeb',
      '&:disabled': {
        backgroundColor: '#ecebeb',
      },
    },
  },
})

export const smallButton = () => ({
  ...button(),
  button: {
    ...button().button,
    padding: 5,
  },
})


export const whiteSlimButton = () => ({
  ...button(),
  button: {
    ...button().button,
    fontSize: 14,
    padding: '6px 10px',
    border: '1px solid rgba(0,0,0,0.12)',
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    borderRadius: 8,
    color: '#717171',
    '&:disabled': {
      backgroundColor: '#F7F7F7',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#F7F7F7',
      boxShadow: 'none',
      '&:disabled': {
        backgroundColor: '#F7F7F7',
        boxShadow: 'none',
      },
    },
  },
  label: {
    color: '#717171',
    fontSize: 14,
    letterSpacing: '1.25px',
    paddingLeft: 11,
    paddingRight: 11,
  },
  loader: {
    padding: '8px 10px 4px',
  },
  hide: {
    height: 0,
    overflow: 'hidden',
  },
})

export const blueSlimButton = () => ({
  ...button(),
  button: {
    ...button().button,
    fontSize: 14,
    padding: '6px 10px',
    border: '1px solid rgba(0,0,0,0.12)',
    backgroundColor: '#BCE0FF',
    boxShadow: 'none',
    borderRadius: 8,
    color: '#717171',
    '&:disabled': {
      backgroundColor: '#F7F7F7',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#91CDFF',
      boxShadow: 'none',
      '&:disabled': {
        backgroundColor: '#F7F7F7',
        boxShadow: 'none',
      },
    },
  },
  label: {
    color: '#717171',
    fontSize: 14,
    letterSpacing: '1.25px',
    paddingLeft: 11,
    paddingRight: 11,
  },
  loader: {
    padding: '8px 10px 4px',
  },
  hide: {
    height: 0,
    overflow: 'hidden',
  },
})


export const slimRedButton = () => ({
  ...button(),
  button: {
    ...button().button,
    fontSize: 14,
    padding: '6px 10px',
    border: '1px solid rgba(0,0,0,0.12)',
    backgroundColor: '#ffb7b7',
    boxShadow: 'none',
    borderRadius: 8,
    color: '#717171',
    '&:disabled': {
      backgroundColor: '#F7F7F7',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#fb9b9b',
      boxShadow: 'none',
      '&:disabled': {
        backgroundColor: '#F7F7F7',
        boxShadow: 'none',
      },
    },
  },
  label: {
    color: '#717171',
    fontSize: 14,
    letterSpacing: '1.25px',
    paddingLeft: 11,
    paddingRight: 11,
  },
  loader: {
    padding: '8px 10px 4px',
  },
  hide: {
    height: 0,
    overflow: 'hidden',
  },
})

export const slimGreenButton = () => ({
  ...button(),
  button: {
    ...button().button,
    fontSize: 14,
    padding: '6px 10px',
    border: '1px solid rgba(0,0,0,0.12)',
    backgroundColor: '#b7ffbd',
    boxShadow: 'none',
    borderRadius: 8,
    color: '#717171',
    '&:disabled': {
      backgroundColor: '#F7F7F7',
      boxShadow: 'none',
    },
    '&:hover': {
      backgroundColor: '#87e48f',
      boxShadow: 'none',
      '&:disabled': {
        backgroundColor: '#F7F7F7',
        boxShadow: 'none',
      },
    },
  },
  label: {
    color: '#717171',
    fontSize: 14,
    letterSpacing: '1.25px',
    paddingLeft: 11,
    paddingRight: 11,
  },
  loader: {
    padding: '8px 10px 4px',
  },
  hide: {
    height: 0,
    overflow: 'hidden',
  },
})
