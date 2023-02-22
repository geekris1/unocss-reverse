import type { Rules } from '../types/rules'
import { width } from './width'
import { height } from './height'
import { background } from './background'
import { position } from './position'
import { max } from './max'
export const rules: Rules[] = [width, height, background, position, max]
