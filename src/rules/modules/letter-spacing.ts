import { rem } from '@/share/rem'
import type { Rule } from '@/types/rules'

const specialMap: Map<string, string> = new Map([
  ['-0.05em', 'tighter'],
  ['-0.025em', 'tight'],
  ['0em', 'normal'],
  ['0.025em', 'wide'],
  ['0.05em', 'wider'],
  ['0.1em', 'widest'],
])

export const letterSpacing: Rule = {
  name: 'letter-spacing',
  transform(ctx: string) {
    const basicName = 'tracking-'
    let suffix = rem(ctx)
    suffix = specialMap.get(suffix) || suffix
    return basicName + suffix
  },
}
