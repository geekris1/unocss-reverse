import type { Rules } from '../types/rules'

export const opacity: Rules = {
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
