import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'
describe('font-size', () => {
  it('font-size1', () => {
    expect(generator('font-size: 1.5rem')).toBe('text-6')
  })
  it('font-size2', () => {
    expect(generator('font-size: 1.25rem')).toBe('text-5')
  })
  it('font-size3', () => {
    expect(generator('font-size: 10px')).toBe('text-10px')
  })
})
