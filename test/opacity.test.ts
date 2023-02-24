import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('opacity', () => {
  it('opacity: 0.5', () => {
    expect(generator('opacity: 0.5')).toBe('op-50')
  })

  it('opacity: 0', () => {
    expect(generator('opacity: 0')).toBe('op-0')
  })

  it('opacity: 1', () => {
    expect(generator('opacity: 1')).toBe('op-100')
  })

  it('opacity: 50%', () => {
    expect(generator('opacity: 50%')).toBe('op-50')
  })

  it('opacity: 100%', () => {
    expect(generator('opacity: 100%')).toBe('op-100')
  })

  it('opacity: 0%', () => {
    expect(generator('opacity: 0%')).toBe('op-0')
  })
})
