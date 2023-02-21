


export type Rules = {
  name: string,
  children?: { [key: string]: Rules },
  match: (ctx: string) => string
}