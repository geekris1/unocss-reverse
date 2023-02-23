import type { Rules } from '../types/rules'

export const normal: Rules = {
  name: /float|clear|justify-items/,
  match: (name: string, _: string[], ctx: string) => {
    return `${name}-${ctx}`
  },
}
