import type { Rule } from '@/types/rules'
import { rem } from '@/share/rem'

const specialMap: Map<string, string> = new Map([
  ['1', 'none'],
  ['1.25', 'tight'],
  ['1.375', 'snug'],
  ['1.5', 'normal'],
  ['1.625', 'relaxed'],
  ['2', 'loose'],
])

export const lineHeight: Rule = {
  name: 'line-height',
  match(name: string, _, ctx) {
    const basicName = 'leading-'
    let suffix = rem(ctx)
    suffix = specialMap.get(suffix) || suffix
    return basicName + suffix
  },
}
