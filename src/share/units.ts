export function isRegExp(value: string | RegExp): boolean {
  return Object.prototype.toString.call(value) === '[object RegExp]'
}

export function isFunction(value: unknown) {
  return typeof value === 'function'
}
