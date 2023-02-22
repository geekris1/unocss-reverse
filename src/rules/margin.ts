import { positionMap } from '../share/position'
import type { Rules } from '../types/rules'

const marginFn: Record<number, Function> = {
  1: (args: string[]) => `m-${args[0]}`,
  2: (args: string[]) => `mx-${args[1]} my-${args[0]}`,
  3: (args: string[]) => `mx-${args[1]} mt-${args[0]} mb-${args[2]}`,
  4: (args: string[]) => `mt-${args[0]} mb-${args[2]} ml-${args[3]} mr-${args[1]}`,
}

function parseMargin(args: string[]) {
  const size = args.length
  return marginFn[size](args)
}

function transformMargin(result: string, names: string[]) {
  if (names.length > 1) {
    const short = positionMap[names[1]]
    return short ? result.replace('m-', `m${short}-`) : undefined
  }
  return result
}

export const margin: Rules = {
  name: 'margin',
  transform: transformMargin,
  match(ctx) {
    const ctx_list = ctx.split(' ')
    return parseMargin(ctx_list)
  },
}
