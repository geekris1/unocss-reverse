import type { Rule } from '@/types/rules'
import { colorAlias, cssColorReg } from '@/share/constants'

export const colors: Rule = {
  name: 'color',
  transform: (ctx: string) => {
    const basic = 'c-'
    let suffix = ctx
    if (cssColorReg.test(ctx)) {
      suffix = `[${ctx}]`
    }
    else if (colorAlias[ctx]) {
      suffix = colorAlias[ctx]
    }
    return basic + suffix
  },
}
