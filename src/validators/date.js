import { isDateValid, getTypeOfValue, isEqual } from '../helper'

export default function({name, value, options, defaultValue}) {
  if (typeof value !== 'undefined' &&
    getTypeOfValue(value) === 'string' &&
    !isEqual(value, defaultValue) &&
    (typeof options.format === 'undefined' ||
    !isDateValid(value, options.format))
  ) {
    return `${name} has incorrect date format`
  }

  return true
}
