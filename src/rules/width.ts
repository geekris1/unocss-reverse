import { calc } from '../share/calc'
import { rem } from '../share/rem'
import type { Rules } from '../types/rules'

export const width: Rules = {
  name: 'width',
  match: (ctx: string) => {
    const basicName = 'w-'
    let suffix = ctx
    if (/rem/.test(ctx)) {
      suffix = rem(ctx)
    }
    else if (/-content/.test(ctx)) {
      suffix = ctx.replace('-content', '')
    }
    else if (/calc/.test(ctx)) {
      suffix = calc(ctx)
    }
    return basicName + suffix
  },
}
