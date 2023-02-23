import type { Rules } from '../types/rules'

export const objectFit: Rules = {
  name: 'object-fit',
  transform(ctx) {
    return `object-${ctx}`
  },
}
