import { rules } from './rules'
import type { Rules } from "./types/rules"
export function transform(names: string[], value: string): string | undefined {
  let rule = findRules(names)
  if (!rule) return undefined
  let result = rule.match(value);
  return rule?.transformFn ? rule.transformFn(result, names) : result
}

function findRules(names: string[], rule?: Rules): Rules | undefined {
  if (rule) {
    if (names?.length > 0 && rule.children) {
      return findRules(names.slice(1), rule.children[names[0]])
    } else {
      return rule
    }
  }
  let currentRule = rules.find(rule => rule.name == names[0])
  if (currentRule) {
    if (names.length > 1 && currentRule.children) {
      return findRules(names.slice(1), currentRule)
    } else {
      return currentRule
    }
  }
  return undefined
}
