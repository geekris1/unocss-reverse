import type { Rules } from '../types/rules'
import { fillRuleMatchPrefix } from '../share/generatedPrefix'
import { width } from './width'
import { height } from './height'
const maxWidth = Object.assign({}, width)
maxWidth.match = function (ctx: string): string {
  return `max-${width.match(ctx)}`
}
export const max: Rules = {
  name: 'max',
  children: { width: fillRuleMatchPrefix('max-', width), height: fillRuleMatchPrefix('max-', height) },
  match: () => '1',
}
