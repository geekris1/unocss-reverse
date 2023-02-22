import { parse } from './parse'
import { transform } from './transform'

export function generator(css: string) {
  const cssAttributeNames = parse(css)
  return cssAttributeNames ? transform(...cssAttributeNames) : undefined
}
