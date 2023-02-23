import type { Rule } from '../types/rules'

const cssColorReg = /^(#|hsl|hsla|hwb|lab|lch|oklab|oklch|rgb|rgba)/

const colorAlias: Record<string, string> = {
  currentColor: 'current',
}
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
