import { remTransform } from "../share/rem";
import { Rules, } from "../types/rules";

export const height = {
  name: "height",
  match: (ctx: string) => {
    const basicName = 'h-'
    let suffix = ctx
    if (/rem/.test(ctx)) {
      suffix = remTransform(ctx)
    } else if (/-content/.test(ctx)) {
      suffix = ctx.replace('-content', "")
    } else if (/calc/.test(ctx)) {
      ctx = ctx.replace(/\s*\-\s*/g, '-')
      suffix = `[${ctx}]`
    }
    return basicName + suffix

  }
}
