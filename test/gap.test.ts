import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('gap', () => {
  it('gap: 0px;', () => {
    expect(generator('gap: 0px;')).toBe('gap-0')
  })

  it('gap: 1px;', () => {
    expect(generator('gap: 1px;')).toBe('gap-px')
  })

  it('gap: 2px;', () => {
    expect(generator('gap: 2px;')).toBe('gap-2px')
  })

  it('gap: 0.125rem;', () => {
    expect(generator('gap: 0.125rem;')).toBe('gap-0.5')
  })

  it('gap: 0.25rem;', () => {
    expect(generator('gap: 0.25rem;')).toBe('gap-1')
  })

  it('gap: 12rem;', () => {
    expect(generator('gap: 12rem;')).toBe('gap-48')
  })
})

describe('column-gap', () => {
  it('column-gap: 0px;', () => {
    expect(generator('column-gap: 0px;')).toBe('gap-x-0')
  })

  it('column-gap: 1px;', () => {
    expect(generator('column-gap: 1px;')).toBe('gap-x-px')
  })

  it('column-gap: 0.25rem;', () => {
    expect(generator('column-gap: 0.25rem;')).toBe('gap-x-1')
  })
})

describe('row-gap', () => {
  it('row-gap: 0px;', () => {
    expect(generator('row-gap: 0px;')).toBe('gap-y-0')
  })

  it('row-gap: 1px;', () => {
    expect(generator('row-gap: 1px;')).toBe('gap-y-px')
  })

  it('row-gap: 0.25rem;', () => {
    expect(generator('row-gap: 0.25rem;')).toBe('gap-y-1')
  })
})
