import type { Rule } from '@/types/rules'

export const objectFit: Rule = {
  name: 'object-fit',
  transform(ctx) {
    return `object-${ctx}`
  },
}
