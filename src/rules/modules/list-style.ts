import type { Rule } from '@/types/rules'

// const listStyleTypeMap = new Map([
//   ['lower-alpha', 'alpha'],
//   ['lower-latin', 'latin'],
//   ['lower-greek', 'greek'],
//   ['lower-roman', 'roman'],
// ])

export const listStyle: Rule = {
  name: /^list-style(-(type|position))?/,
  transform(ctx: string) {
    if (ctx.startsWith('lower-')) {
      ctx = ctx.replace('lower-', '')
    }
    return `list-${ctx}`
  },
}
