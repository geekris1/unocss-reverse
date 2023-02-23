const alias: Record<string, string> = { 'position': 'pos', 'z-index': 'z' }
export const position = {
  name: /^(position|z-index)$/,
  transform: (ctx: string, basic: string) => {
    const suffix = ctx
    return `${basic}-${suffix}`
  },
  match: (name: string) => {
    return alias[name]
  },
}
