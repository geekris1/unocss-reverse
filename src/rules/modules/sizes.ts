import type { Rule } from '@/types/rules'
import { calc } from '@/share/calc'
import { rem } from '@/share/rem'

const reg = /((max|min)-)?(width|height)/

const replaceMap: Record<string, string> = {
  max: 'max-',
  min: 'min-',
  height: 'h-',
  width: 'w-',
}

export const sizes: Rule = {
  name: reg,
  transform,
  match: (_, names: string[]) => {
    return names.reduce((prev, next) => {
      return prev + replaceMap[next]
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
