import type { Rule } from '@/types/rules'

const specialMap: Map<string, string> = new Map([
  ['0', 'none'],
  ['9999', 'first'],
  ['-9999', 'last'],
])

export const order: Rule = {
  name: 'order',
  transform(ctx: string) {
    const basicName = 'order-'
    const suffix = specialMap.get(ctx) || ctx
    return basicName + suffix
  },
}
