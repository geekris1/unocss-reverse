export interface Rule {
  name: string | RegExp
  // example
  // background-color : red
  // name : background-color
  // names : [background,color]
  // ctx : red
  // basic : match function return values;
  transform?: (ctx: string, basic: string, names: string[]) => string | undefined
  // if name type is regexp , you will need it.
  // you can handle different prefixes based on the name here,
  // and pass them to the transform function as matchReturn values
  match?: (name: string, names: string[], ctx: string) => string | undefined
}

export type Rules = Rule[]
