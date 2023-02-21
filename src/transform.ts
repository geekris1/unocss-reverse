import { rules } from './rules'
import type { Rules } from './types/rules'
export function transform(names: string[], value: string): string | undefined {
  const rule = findRules(names)

  return rule ? rule.match(value) : undefined
}

function findRules(names: string[], rule?: Rules): Rules | undefined {
  if (rule) {
    if (names?.length > 0)
      return findRules(names.slice(0), rule)
    else
      return rule
  }
  const currentRule = rules.find(rule => rule.name === names[0])

  if (currentRule) {
    if (currentRule.children)
      return findRules(names.slice(0), currentRule)
    else
      return currentRule
  }
  return undefined
}
