import { rules } from './rules'
import type { Rules } from './types/rules'
export function transform(names: string[], value: string): string | undefined {
  const rule = findRules(names)

  return rule ? rule.match(value) : undefined
}

function findRules(names: string[], rule?: Rules): Rules | undefined {
  if (rule) {
    if (names?.length > 0 && rule.children) {
      return findRules(names.slice(1), rule.children[names[0]])
    } else {
      return rule
  }
  const currentRule = rules.find(rule => rule.name === names[0])

  if (currentRule) {
    if (names.length > 1 && currentRule.children) {
      return findRules(names.slice(1), currentRule)
    } else {
      return currentRule
  }
  return undefined
}
