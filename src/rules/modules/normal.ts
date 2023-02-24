import type { Rule } from '@/types/rules'

export const normal: Rule = {
  name: /float|clear/,
  match: (name: string, _: string[], ctx: string) => {
    return `${name}-${ctx}`
  },
}
