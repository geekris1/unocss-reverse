export interface Rules {
  name: string
  children?: { [key: string]: Rules }
  transform?: Function
  match: (ctx: string) => string | undefined
}
