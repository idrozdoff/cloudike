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

export const getTimeOptions = (step: number = 30) => {
  const arr = []
  const chunks = 60 / step
  for (let i = 0; i < 24; i += 1) {
    for (let j = chunks; j > 0; j -= 1) {
      if (i < 10) {
        arr.push({
          label: `0${i}:${60 - (j * step) ? 60 - (j * step) : '00'}`,
          value: `0${i}:${60 - (j * step) ? 60 - (j * step) : '00'}:00`
        })
      }
      if (i > 9) {
        arr.push({
          label: `${i}:${60 - (j * step) ? 60 - (j * step) : '00'}`,
          value: `${i}:${60 - (j * step) ? 60 - (j * step) : '00'}:00`
        })
      }
    }
  }
  return arr
}

export const tConvert = (time: string) => {
  let chekedTime: any = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time]
  if (chekedTime.length > 1) {
    chekedTime = chekedTime.slice(1)
    chekedTime[5] = +chekedTime[0] < 12 ? 'am' : 'pm'
    // chekedTime[1] = ''
    // chekedTime[2] = ''
    chekedTime[3] = ''
    chekedTime[4] = ''
    chekedTime[0] = +chekedTime[0] % 12 || 12
  }
  return chekedTime.join('')
}

export const parseDate = (date: string) => new Date(Date.parse(date))

export const diffDays = (date1: Date = new Date(), date2: Date, additionalTime: number = 0) => (
  Math.round(Math.abs((date1.getTime() - (date2.getTime() + additionalTime * HOUR)) / (oneDay)))
)

export const isExpiredSubscription = (currnetDate: Date, validUntil: Date, diff: number) => (
  currnetDate > validUntil ? diff * (-1) : diff
)
