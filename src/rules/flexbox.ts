import type { Rule } from '../types/rules'

const specialValueMap: Map<string, string> = new Map([
  ['flex-start', 'start'],
  ['flex-end', 'end'],
  ['space-around', 'around'],
  ['space-between', 'between'],
  ['space-evenly', 'evenly'],
])

const nameMap: Map<string, string> = new Map([
  ['align-items', 'items'],
  ['align-content', 'content'],
  ['align-self', 'self'],
  ['justify-content', 'justify'],
])

export const flexbox: Rule = {
  name: /(align|justify|place)-(content|items|self)/,
  transform(ctx, basic: string) {
    ctx = specialValueMap.get(ctx) || ctx
    return `${basic}-${ctx}`
  },
  match(name) {
    return nameMap.get(name) || name
  },
}
