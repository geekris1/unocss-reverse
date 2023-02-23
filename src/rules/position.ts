import { unitOfLengthTransform } from '../share/lengthOfUnit'
import type { Rules } from '../types/rules'

const alias: Record<string, string> = { 'position': 'pos', 'z-index': 'z' }
export const position: Rules = {
  name: /^(position|z-index)$/,
  transform: (ctx: string, basic: string) => {
    const suffix = ctx
    return `${basic}-${suffix}`
  },
  match: (name: string) => {
    return alias[name]
  },
}

export const directions: Rules = {
  name: /^(top|left|right|bottom)$/,
  transform: (ctx: string, basic: string) => {
    return `${basic}-${unitOfLengthTransform(ctx) || ctx}`
  },
  match: (name: string) => name,
}
