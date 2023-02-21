
export function remTransform(value: string): string {
  if (/rem/.test(value)) {
    let valueNumber = Number(value.replace('rem', ""))
    if (Number.isNaN(valueNumber)) {
      return value
    } else {
      return "" + (valueNumber * 4)
    }
  } else {
    return value
  }
}