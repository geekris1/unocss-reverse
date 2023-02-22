


export type Rules = {
  name: string,
  children?: { [key: string]: Rules },
  transformFn?: Function,
  match: (ctx: string) => string | undefined
}
