import { parse } from './parse'
import { transform } from './transform'

export function generator(css: string) {
  const parseValue = parse(css)
  return parseValue ? transform(...parseValue) : undefined
}
