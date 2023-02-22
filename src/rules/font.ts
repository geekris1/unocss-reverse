import { rem } from '../share/rem'
import type { Rules } from '../types/rules'
const { log } = console
export const font: Rules = {
  name: 'font',
  match: (ctx: string) => (
    `text-${ctx}`
  ),
  children: {
    size: {
      name: 'size',
      match: (ctx: string) => {
        const basic = 'text-'
        let suffix = ctx
        if (/rem/.test(ctx)) {
          suffix = rem(ctx)
        }
        return basic + suffix
      },
    },
  },
}
