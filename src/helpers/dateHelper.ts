import moment from 'moment-timezone'

export enum DateFormatEnum {
  DAY_MONTH_YEAR_HOUR_MINUTES = 'DD/MM/YYYY HH:mm'
}

export const convertUnixDateToFormatDate = (unixDate:number):string => moment.unix(unixDate).subtract(1,'hour').format(DateFormatEnum.DAY_MONTH_YEAR_HOUR_MINUTES)