import { rem } from '../share/rem'
import type { Rules } from '../types/rules'

export const font: Rules = [
  {
    name: 'font',
    transform: (ctx: string) => (
      `text-${ctx}`
    ),
  },
  {
    name: 'font-size',
    transform: (ctx: string) => {
      const basic = 'text-'
      let suffix = ctx
      if (/rem/.test(ctx)) {
        suffix = rem(ctx)
      }
      return basic + suffix
    },
  },
]
