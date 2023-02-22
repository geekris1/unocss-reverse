import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'
describe('width', () => {
  it('text-align', () => {
    expect(generator('text-align: left')).toMatchInlineSnapshot('"text-left"')
  })

  it('font-size1', () => {
    expect(generator('font-size: 1.5rem')).toMatchInlineSnapshot('"text-2xl"')
  })
  it('font-size2', () => {
    expect(generator('font-size: 1.25rem')).toMatchInlineSnapshot('"text-xl"')
  })
  it('font-size3', () => {
    expect(generator('font-size: 1.8rem')).toMatchInlineSnapshot('"text-7.2"')
  })
})
