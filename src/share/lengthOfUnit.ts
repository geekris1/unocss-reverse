export const otherUnitOfLength = /(px|em|ex|ch|vw|vh|vmin|%|pt|pc|cm|mm|in)$/
export const unitOfLength = /(rem|px|em|ex|ch|vw|vh|vmin|%|pt|pc|cm|mm|in)$/
export function isLengthOfUnit(value: string): boolean {
  return unitOfLength.test(value)
}
export function unitOfLengthTransform(value: string): string | undefined {
  if (/rem/.test(value)) {
    return rem(value)
  }
  else if (otherUnitOfLength.test(value)) {
    const valueNumber = Number(value.replace(otherUnitOfLength, ''))
    if (!Number.isNaN(valueNumber)) {
      return value
    }
  }
  return undefined
}

export function rem(value: string): string {
  if (/rem/.test(value)) {
    const valueNumber = Number(value.replace('rem', ''))
    if (Number.isNaN(valueNumber))
      return value
    else
      return `${valueNumber * 4}`
  }
  else {
    return value
  }
}
