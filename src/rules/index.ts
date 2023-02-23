import type { Rule } from '../types/rules'
import { size } from './size'
import { background } from './background'
import { margin, padding } from './spacing'
import { position } from './position'
import { font } from './font'
import { cursor } from './cursor'
import { opacity } from './opacity'
import { colors } from './colors'
import { display } from './display'

export const rules: Rule[] = [
  size,
  background,
  padding,
  position,
  margin,
  font,
  cursor,
  opacity,
  colors,
  display,
].flat(1)
