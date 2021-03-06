import { getTypeOfValue, isEqual } from '../helper'

export default function({name, value, defaultValue}) {
  const typeOfValue = getTypeOfValue(value)

  if (typeof value === 'undefined' || (!value && typeOfValue !== 'boolean' && !isEqual(value, defaultValue))) {
    return `${name} is required`
  }

  return true
}
