import { remTransform } from "../share/rem";
import { Rules } from "../types/rules";

const size = /auto|cover|contain/
export const background: Rules = {
  name: "background",
  match: backgroundMatch,
  children: {
    "size": {
      name: "size",
      match: backgroundSizeAndAttachmentMatch
    },
    "attachments": {
      name: "attachments",
      match: backgroundSizeAndAttachmentMatch
    },
    "clip": {
      name: "clip",
      match: backgroundClipMatch
    },
    "position": {
      name: "position",
      match: backgroundPositionMatch
    },
    "repeat": {
      name: "repeat",
      match: backgroundRepeatMatch
    },
    "origin": {
      name: "origin",
      match: backgroundOriginMatch
    },
    "image": {
      name: "image",
      match: backgroundImageMatch
    }
  }
}

function backgroundMatch(ctx: string): string {
  console.log("2")
  let basicName = 'bg-'
  let suffix = ctx
  return basicName + suffix
}


function backgroundSizeAndAttachmentMatch(ctx: string): string {
  let basicName = 'bg-'
  let suffix = ctx
  return basicName + suffix
}

function backgroundClipMatch(ctx: string): string {
  console.log("1")
  let basicName = 'bg-clip-'
  let suffix = ctx
  if (/border|content|padding/.test(ctx)) {
    suffix = ctx.replace('-box', '')
  }
  return basicName + suffix
}

function backgroundPositionMatch(ctx: string): string {
  let basicName = 'bg-'
  let suffix = ctx.replace(/\s+/g, "-")
  return basicName + suffix
}



function backgroundRepeatMatch(ctx: string): string {
  let basicName = 'bg-repeat-'
  let suffix = ctx
  if (ctx === 'repeat') { return "bg-repeat" }
  else if (ctx === 'no-repeat') { return "bg-no-repeat" }
  else if (/repeat-[xy]/.test(ctx)) {
    suffix = ctx.replace("repeat-", "")
  }
  return basicName + suffix
}

function backgroundOriginMatch(ctx: string): string {
  let basicName = 'bg-origin-'
  let suffix = ctx
  if (/[border|padding|content]-box/.test(ctx)) {
    suffix = ctx.replace('-box', "")
  }
  return basicName + suffix
}

function backgroundImageMatch(ctx: string): string {
  let basicName = 'bg-'
  let suffix = ctx
  if (ctx === 'none') {
    return "bg-none"
  } else if (/url/.test(ctx)) {
    suffix = imageUrl(ctx)

  }
  return basicName + suffix
}

function imageUrl(ctx: string): string {
  return `[${ctx}]`
}