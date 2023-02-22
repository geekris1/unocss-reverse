export function parseAttributeName(css: string): [string[], string] | undefined {
  const reg = /(.+):{1}(.+)/
  const matchValue = css.match(reg)
  if (!matchValue) {
    return undefined
  }
  else {
    const [_, names, values] = matchValue
    const splitNames = names.trim().split('-')
    return [splitNames, values.trim()]
  }
}

export function parse(css: string) {
  // drop the semicolon at the end
  while (css.endsWith(';')) {
    css = css.slice(0, -1)
  }
  const attributeValue = parseAttributeName(css)
  return attributeValue
}
