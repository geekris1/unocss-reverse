import type { Rule } from '@/types/rules'
import { unitOfLengthTransform } from '@/share/lengthOfUnit'

const alias: Record<string, string> = { 'position': 'pos', 'z-index': 'z' }

export const position: Rule = {
  name: /^(position|z-index)$/,
  transform: (ctx: string, basic: string) => {
    const suffix = ctx
    return `${basic}-${suffix}`
  },
  match: (name: string) => {
    return alias[name]
  },
}

export const directions: Rule = {
  name: /^(top|left|right|bottom)$/,
  transform: (ctx: string, basic: string) => {
    return `${basic}-${unitOfLengthTransform(ctx) || ctx}`
  },
  match: (name: string) => name,
}
