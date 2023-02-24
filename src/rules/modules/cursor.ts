import type { Rule } from '@/types/rules'

export const cursor: Rule = {
  name: 'cursor',
  transform(ctx) {
    const basicName = 'cursor-'
    // TODO: if url includes ',' how to fix it?
    if (ctx.includes(',')) {
      const values = ctx.split(',').map(item => item.trim())
      return `${basicName}[${values.join(',')}]`
    }
    return basicName + ctx
  },
}
