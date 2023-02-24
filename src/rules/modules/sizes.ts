import type { Rule } from '@/types/rules'
import { calc } from '@/share/calc'
import { rem } from '@/share/rem'

const reg = /(max-)?(width|height)/

export const sizes: Rule = {
  name: reg,
  transform,
  match: (_, names: string[]) => {
    const replace: Record<string, string> = { max: 'max-', height: 'h-', width: 'w-' }
    return names.reduce((prev, next) => {
      return prev + replace[next]
    }, '')
  },
}

function transform(ctx: string, matchReturnValue: string) {
  const basicName = matchReturnValue
  let suffix = ctx
  if (/rem/.test(ctx)) {
    suffix = rem(ctx)
  }
  else if (/-content/.test(ctx)) {
    suffix = ctx.replace('-content', '')
  }
  else if (/calc/.test(ctx)) {
    suffix = calc(ctx)
  }
  return basicName + suffix
}
