import type { Rules } from '../types/rules'
import { width } from './width'
import { height } from './height'

export const max: Rules = {
  name: 'max',
  children: {
    width: {
      ...width,
      transform: fillPrefix,
    },
    height: {
      ...height,
      transform: fillPrefix,
    },
  },
  match: () => '1',
}

function fillPrefix(result: string) {
  return `max-${result}`
}
