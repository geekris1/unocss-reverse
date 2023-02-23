import type { Rules } from '../types/rules'

const specialAlignItemsMap: Map<string, string> = new Map([
  ['flex-start', 'start'],
  ['flex-end', 'end'],
])

export const alignItems: Rules = {
  name: 'align-items',
  transform(ctx) {
    ctx = specialAlignItemsMap.get(ctx) || ctx
    return `items-${ctx}`
  },
}
