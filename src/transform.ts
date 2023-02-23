import { rules } from './rules'
import { isRegExp } from './share/units'
import type { Rule } from './types/rules'

export function transform(name: string, names: string[], ctx: string): string | undefined {
  const rule = findRules(name)
  if (!rule)
    return undefined
  const matchReturnValue = typeof rule.match === 'function' ? rule.match(name, names, ctx) : undefined
  return typeof rule.transform === 'function' ? rule.transform(ctx, matchReturnValue || '', names) : undefined
}

function findRules(name: string): Rule | undefined {
  return rules.find((rule) => {
    if (isRegExp(rule.name)) {
      return (rule.name as RegExp).test(name)
    }
    else {
      return rule.name === name
    }
  })
}
