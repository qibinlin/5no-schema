import { getTypeOfValue } from '../helper'

export default function({value}) {
  if (value === null) {
    return null
  }

  const typeOfValue = getTypeOfValue(value)

  if (typeOfValue === 'string') {
    return value.trim()
  }

  return value
}
