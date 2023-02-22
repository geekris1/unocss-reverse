import type { Rules } from '../types/rules'

export const background: Rules = [
  { name: 'background', transform: backgroundMatch },
  { name: 'background-size', transform: backgroundSizeAndAttachmentMatch },
  { name: 'background-attachments', transform: backgroundSizeAndAttachmentMatch },
  { name: 'background-clip', transform: backgroundClipMatch },
  { name: 'background-position', transform: backgroundPositionMatch },
  { name: 'background-repeat', transform: backgroundRepeatMatch },
  { name: 'background-origin', transform: backgroundOriginMatch },
  { name: 'background-image', transform: backgroundImageMatch },
]

function backgroundMatch(ctx: string): string {
  const basicName = 'bg-'
  const suffix = ctx
  return basicName + suffix
}

function backgroundSizeAndAttachmentMatch(ctx: string): string {
  const basicName = 'bg-'
  const suffix = ctx
  return basicName + suffix
}

function backgroundClipMatch(ctx: string): string {
  const basicName = 'bg-clip-'
  let suffix = ctx
  if (/border|content|padding/.test(ctx))
    suffix = ctx.replace('-box', '')

  return basicName + suffix
}

function backgroundPositionMatch(ctx: string): string {
  const basicName = 'bg-'
  const suffix = ctx.replace(/\s+/g, '-')
  return basicName + suffix
}

function backgroundRepeatMatch(ctx: string): string {
  const basicName = 'bg-repeat-'
  let suffix = ctx
  if (ctx === 'repeat')
    return 'bg-repeat'
  else if (ctx === 'no-repeat')
    return 'bg-no-repeat'
  else if (/repeat-[xy]/.test(ctx))
    suffix = ctx.replace('repeat-', '')

  return basicName + suffix
}

function backgroundOriginMatch(ctx: string): string {
  const basicName = 'bg-origin-'
  let suffix = ctx
  if (/[border|padding|content]-box/.test(ctx))
    suffix = ctx.replace('-box', '')

  return basicName + suffix
}

function backgroundImageMatch(ctx: string): string {
  const basicName = 'bg-'
  let suffix = ctx
  if (ctx === 'none')
    return 'bg-none'
  else if (/url/.test(ctx))
    suffix = imageUrl(ctx)

  return basicName + suffix
}

function imageUrl(ctx: string): string {
  return `[${ctx}]`
}
