import { transform } from "./transform";
import { parse } from "./parse";

export function generator(css: string) {
  const cssAttributeNames = parse(css)
  return cssAttributeNames ? transform(...cssAttributeNames) : undefined
}