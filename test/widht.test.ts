import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'
describe('width', () => {
  it('px', () => {
    expect(generator('width:1px')).toMatchInlineSnapshot('"w-1px"')
  })

  it('em', () => {
    expect(generator('width:1em')).toMatchInlineSnapshot('"w-1em"')
  })

  it('rem', () => {
    expect(generator('width:1rem')).toMatchInlineSnapshot('"w-4"')
  })

  it('max-content', () => {
    expect(generator('width: max-content')).toMatchInlineSnapshot('"w-max"')
  })

  it('min-content', () => {
    expect(generator(' width:min-content')).toMatchInlineSnapshot('"w-min"')
  })

  it('fit-content', () => {
    expect(generator(' width:fit-content')).toMatchInlineSnapshot('"w-fit"')
  })

  it('auto', () => {
    expect(generator(' width:auto')).toMatchInlineSnapshot('"w-auto"')
  })
})
