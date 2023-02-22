import type { Rules } from '../types/rules'

export function fillRuleMatchPrefix(prefix: string, rule: Rules): Rules {
  const newRule = Object.assign({}, rule)
  newRule.match = function (ctx: string): string {
    return prefix + rule.match(ctx)
  }
  return newRule
}
