import type { Rules } from '../types/rules'
import { width } from './width'
import { height } from './height'
import { background } from './background'
import { padding } from './padding'
import { position } from './position'
import { max } from './max'
import { margin } from './margin'
import { font } from './font'
import { cursor } from './cursor'

export const rules: Rules[] = [
  width,
  height,
  background,
  padding,
  position,
  max,
  margin,
  font,
  cursor,
]
