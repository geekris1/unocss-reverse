import type { Rule } from '@/types/rules'

export const textAlign: Rule = {
  name: 'text-align',
  match(name: string, _, ctx: string) {
    return `text-${ctx}`
  },
}
