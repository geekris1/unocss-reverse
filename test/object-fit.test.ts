import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('object-fit', () => {
  it('object-fit: cover;', () => {
    expect(generator('object-fit: cover;')).toBe('object-cover')
  })

  it('object-fit: none;', () => {
    expect(generator('object-fit: none;')).toBe('object-none')
  })

  it('object-fit: scale-down;', () => {
    expect(generator('object-fit: scale-down;')).toBe('object-scale-down')
  })
})
