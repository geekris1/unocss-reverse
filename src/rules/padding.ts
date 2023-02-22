import { positionMap } from '../share/position'
import type { Rules } from '../types/rules'

const paddingFn: Record<number, Function> = {
  1: (args: string[]) => `p-${args[0]}`,
  2: (args: string[]) => `px-${args[1]} py-${args[0]}`,
  3: (args: string[]) => `px-${args[1]} pt-${args[0]} pb-${args[2]}`,
  4: (args: string[]) => `pt-${args[0]} pb-${args[2]} pl-${args[3]} pr-${args[1]}`,
}

function parsePadding(args: string[]) {
  const size = args.length

  return paddingFn[size](args)
}

function transformPadding(result: string, names: string[]) {
  if (names.length > 1) {
    const short = positionMap[names[1]]
    return short ? result.replace('p-', `p${short}-`) : undefined
  }
  return result
}

export const padding: Rules = {
  name: 'padding',
  transform: transformPadding,
  match(ctx) {
    const ctx_list = ctx.split(' ')
    return parsePadding(ctx_list)
  },
}
