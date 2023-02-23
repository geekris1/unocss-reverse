import type { Rules } from '../types/rules'

const specialMap: Map<string, string> = new Map([
  ['flex-start', 'start'],
  ['flex-end', 'end'],
  ['space-around', 'around'],
  ['space-between', 'between'],
  ['space-evenly', 'evenly'],
])

export const justifyContent: Rules = {
  name: 'justify-content',
  transform(ctx) {
    ctx = specialMap.get(ctx) || ctx
    return `justify-${ctx}`
  },
}
