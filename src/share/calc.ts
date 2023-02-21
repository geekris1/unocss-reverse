export function calc(ctx: string): string {
  return `[${ctx.replace(/\s*\-\s*/g, '-')}]`
}