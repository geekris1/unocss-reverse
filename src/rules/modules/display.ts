import type { Rule } from '@/types/rules'

const specialDisplayMap: Map<string, string> = new Map([
  ['none', 'hidden'],
])

export const display: Rule = {
  name: 'display',
  transform(ctx) {
    // TODO: support parse multi-keyword syntax of display like `display: inline flex;`
    // https://developer.mozilla.org/en-US/docs/Web/CSS/display/multi-keyword_syntax_of_display
    return specialDisplayMap.get(ctx) || ctx
  },
}
