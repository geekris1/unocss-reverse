import { rem } from '@/share/rem'
import type { Rule } from '@/types/rules'

export const gap: Rule = {
  name: /((column|row)-)?gap/,
  transform(ctx: string, basic: string) {
    const suffix = rem(ctx)
    if (suffix === '0px' || suffix === '0rem') {
      return `${basic}0`
    }
    if (suffix === '1px') {
      return `${basic}px`
    }
    return basic + suffix
  },
  match(name: string) {
    switch (name) {
      case 'gap':
        return 'gap-'
      case 'column-gap':
        return 'gap-x-'
      case 'row-gap':
        return 'gap-y-'
    }
    return undefined
  },
}
