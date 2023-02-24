import type { Rule } from '@/types/rules'

export const opacity: Rule = {
  name: 'opacity',
  transform(ctx) {
    const basicName = 'op-'
    let isPercentage = false
    if (ctx.includes('%')) {
      ctx = ctx.replace('%', '')
      isPercentage = true
    }
    const value = +ctx
    if (isNaN(value))
      return undefined
    return basicName + value * (isPercentage ? 1 : 100)
  },
}
