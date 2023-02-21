import * as rules from './rules'
export function parseAttributeName(css: string): [string[], string] | undefined {
  let reg = /(.+):{1}(.+)/
  let matchValue = css.match(reg);
  if (!matchValue) {
    return undefined;
  } else {
    const [_, names, values] = matchValue
    const splitNames = names.trim().split('-')
    return [splitNames, values.trim()]
  }
}

export function parse(css: string) {
  const attributeValue = parseAttributeName(css)

  return attributeValue
}

