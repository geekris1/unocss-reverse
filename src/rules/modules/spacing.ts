import type { Rule } from '@/types/rules'
import { positionMap } from '@/share/position'

export const padding: Rule = {
  name: /padding(-(left|right|top|bottom))*$/,
  transform: transformSpacing,
  match: spacingMatch('p'),
}

export const margin: Rule = {
  name: /margin(-(left|right|top|bottom))*$/,
  transform: transformSpacing,
  match: spacingMatch('m'),
}

const spacingValueFunction: Record<number, Function> = {
  1: (basic: string, args: string[]) => `${basic}-${args[0]}`,
  2: (basic: string, args: string[]) => `${basic}x-${args[1]} ${basic}y-${args[0]}`,
  3: (basic: string, args: string[]) => `${basic}x-${args[1]} ${basic}t-${args[0]} ${basic}b-${args[2]}`,
  4: (basic: string, args: string[]) => `${basic}t-${args[0]} ${basic}b-${args[2]} ${basic}l-${args[3]} ${basic}r-${args[1]}`,
}

function parseMargin(basic: string, args: string[]) {
  const size = args.length
  return spacingValueFunction[size]?.(basic, args)
}

function transformSpacing(ctx: string, basic: string) {
  const ctx_list = ctx.split(' ')
  return parseMargin(basic, ctx_list)
}

function spacingMatch(prefix: string) {
  return (_: string, names: string[]) => {
    const short = positionMap[names[1]]
    return short ? `${prefix}${short}` : `${prefix}`
  }
}
