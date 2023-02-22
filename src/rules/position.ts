export const position = {
  name: 'position',
  transform: (ctx: string) => {
    const basicName = 'pos-'
    const suffix = ctx
    return basicName + suffix
  },
}
