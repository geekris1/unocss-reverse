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
