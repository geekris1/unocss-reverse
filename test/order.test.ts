import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('order', () => {
  it('order: 9999', () => {
    expect(generator('order: 9999')).toBe('order-first')
  })

  it('order: -9999', () => {
    expect(generator('order: -9999')).toBe('order-last')
  })

  it('order: 0', () => {
    expect(generator('order: 0')).toBe('order-none')
  })

  it('order: 1', () => {
    expect(generator('order: 1')).toBe('order-1')
  })

  it('order: -1', () => {
    expect(generator('order: -1')).toBe('order--1')
  })
})
