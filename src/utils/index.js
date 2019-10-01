// @flow

import helvetica from '../fonts/Helvetica.ttf'

const HOUR = 60 * 60 * 1000 // minutes*seconds*milliseconds
const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds


export const getRequestBody = (action: any) => JSON.parse(action.meta.requestAction.request.body)

export const getFontFaces = (
  familyFieldName: string = 'fontFamily',
  scrType: string = 'url',
  styleFieldName: string = 'fontStyle',
  weightFieldName: string = 'fontWeight',
  prefix: string = '',
) => (
  [
    {
      [familyFieldName]: 'CircularStd',
      src: `${scrType}(${prefix}${helvetica})`,
      [styleFieldName]: 'normal',
      [weightFieldName]: 'normal'
    },
  ]
)

export const dateFormat = (currentDate: Date, options: Object = {month: 'short', day: 'numeric', year: 'numeric'}) => (
  currentDate.toLocaleDateString("en-US", options)
)
