import { remTransform } from "../share/rem";
import { Rules, } from "../types/rules";

export const position = {
  name: "position",
  match: (ctx: string) => {
    let basicName = 'pos-'
    let suffix = ctx
    return basicName + suffix

  }
}
