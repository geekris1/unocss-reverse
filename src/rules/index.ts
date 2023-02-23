import type { Rule } from '../types/rules'
import { alignItems } from './align-items'
import { size } from './size'
import { background } from './background'
import { margin, padding } from './spacing'
import { position } from './position'
import { font } from './font'
import { cursor } from './cursor'
import { objectFit } from './object-fit'
import { opacity } from './opacity'
import { colors } from './colors'
import { display } from './display'
import { normal } from './normal'

export const rules: Rule[] = [
  alignItems,
  normal,
  size,
  background,
  padding,
  position,
  margin,
  font,
  cursor,
  objectFit,
  opacity,
  colors,
  display,
].flat(1)
