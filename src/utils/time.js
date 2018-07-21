import moment from 'moment'

export const convertTimetoText = time => {
  return moment(time).format('MMM DD, YYYY')
}
