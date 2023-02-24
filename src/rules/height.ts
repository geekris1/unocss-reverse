import type { Rule } from '../types/rules'
import { calc } from '../share/calc'
import { rem } from '../share/rem'

export const height: Rule = {
  name: 'height',
  match: (name, names, ctx: string) => {
    const basicName = 'h-'
    let suffix = ctx
    if (/rem/.test(ctx))
      suffix = rem(ctx)
    else if (/-content/.test(ctx))
      suffix = ctx.replace('-content', '')
    else if (/calc/.test(ctx))
      suffix = calc(ctx)
    return basicName + suffix
  },
}
