import type { Rule } from '../types/rules'
import { size } from './size'
import { background } from './background'
import { margin, padding } from './spacing'
import { position } from './position'
import { font } from './font'
import { cursor } from './cursor'

export const rules: Rule[] = [
  size,
  background,
  padding,
  position,
  margin,
  font,
  cursor,
].flat(1)
