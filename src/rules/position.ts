export const position = {
  name: 'position',
  match: (ctx: string) => {
    const basicName = 'pos-'
    const suffix = ctx
    return basicName + suffix
  },
}
