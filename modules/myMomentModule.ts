import * as moment from 'moment'

export function getCurrentDate(): Date {
    return new Date(moment().toISOString())
}