import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('list-style', () => {
  it('list-style: inside;', () => {
    expect(generator('list-style: inside;')).toBe('list-inside')
  })
})

describe('list-style-type', () => {
  it('list-style-type: disc;', () => {
    expect(generator('list-style-type: disc;')).toBe('list-disc')
  })

  it('list-style-type: none;', () => {
    expect(generator('list-style-type: none;')).toBe('list-none')
  })

  it('list-style-type: decimal;', () => {
    expect(generator('list-style-type: decimal;')).toBe('list-decimal')
  })

  it('list-style-type: lower-alpha;', () => {
    expect(generator('list-style-type: lower-alpha;')).toBe('list-alpha')
  })
})

describe('list-style-position', () => {
  it('list-style-position: inside;', () => {
    expect(generator('list-style-position: inside;')).toBe('list-inside')
  })

  it('list-style-position: outside;', () => {
    expect(generator('list-style-position: outside;')).toBe('list-outside')
  })

  it('list-style-position: outside;', () => {
    expect(generator('list-style-position: outside;')).toBe('list-outside')
  })
})
