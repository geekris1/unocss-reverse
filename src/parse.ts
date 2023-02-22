export function parseAttributeName(css: string): [string, string[], string] | undefined {
  const reg = /(.+):{1}(.+)/
  const matchValue = css.match(reg)
  if (!matchValue) {
    return undefined
  }
  else {
    const [_, name, values] = matchValue
    const names = name.trim().split('-')
    return [name, names, values.trim()]
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
