const map: any = {
  'width': 'w',
  'background': 'bg',
  'font-size': 'text',
}

const sizeMap = ['font-size']

const fontSize: any = {
  0.75: 'xs',
  0.875: 'sm',
  1: 'base',
  1.125: 'lg',
  1.25: 'xl',
  1.5: '2xl',
  1.875: '3xl',
  2.25: '4xl',
  3: '5xl',
  3.75: '6xl',
  4.5: '7xl',
  6: '8xl',
  8: '9xl',
}

export function parseAttributeName(css: string): string {
  const SPLITREG = /([\w-]+):\s*(.*)/
  let result = ''
  css.replace(SPLITREG, (_, key, val) => {
    const mapKey = map[key]
    const mapValue: string = getFirstKey(val)

    if (mapKey)
      result += `${mapKey}-${transformRem(mapValue, sizeMap.includes(key) ? 'font' : 'size')}`
    else
      result += `${getFirstKey(key)}-${transformRem(val, sizeMap.includes(key) ? 'font' : 'size')}`

    return result
  })
  return result
}

export function transformRem(s: string, type: 'font' | 'size' = 'size') {
  const REMREG = /([0-9.]+)rem/

  return s.replace(REMREG, (_, v) => {
    const result = String(v * 4)
    if (type === 'size')
      return result
    return fontSize[v] || result
  })
}

export function getFirstKey(s: string) {
  return s.split('-')[0]
}

export function parse(css: string) {
  const attributeValue = parseAttributeName(css)

  return attributeValue
}
