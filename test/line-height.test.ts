import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('line-height', () => {
  it('line-height: normal', () => {
    expect(generator('line-height: normal')).toBe('leading-normal')
  })

  it('line-height: 1', () => {
    expect(generator('line-height: 1')).toBe('leading-none')
  })

  it('line-height: 1.5', () => {
    expect(generator('line-height: 1.5')).toBe('leading-normal')
  })

  it('line-height: 1.25', () => {
    expect(generator('line-height: 1.25')).toBe('leading-tight')
  })

  it('line-height: 1.375', () => {
    expect(generator('line-height: 1.375')).toBe('leading-snug')
  })

  it('line-height: 1.625', () => {
    expect(generator('line-height: 1.625')).toBe('leading-relaxed')
  })

  it('line-height: 2', () => {
    expect(generator('line-height: 2')).toBe('leading-loose')
  })

  it('line-height: .75rem;', () => {
    expect(generator('line-height: .75rem;')).toBe('leading-3')
  })

  it('line-height: 1rem;', () => {
    expect(generator('line-height: 1rem;')).toBe('leading-4')
  })

  it('line-height: 16px;', () => {
    expect(generator('line-height: 16px;')).toBe('leading-16px')
  })

  it('line-height: 1.5rem;', () => {
    expect(generator('line-height: 1.5rem;')).toBe('leading-6')
  })

  it('line-height: 2.5rem;', () => {
    expect(generator('line-height: 2.5rem;')).toBe('leading-10')
  })

  it('line-height: 24px;', () => {
    expect(generator('line-height: 24px;')).toBe('leading-24px')
  })

  it('line-height: 40px;', () => {
    expect(generator('line-height: 40px;')).toBe('leading-40px')
  })

  it('line-height: 88px;', () => {
    expect(generator('line-height: 88px;')).toBe('leading-88px')
  })

  it('line-height: 5.5rem;', () => {
    expect(generator('line-height: 5.5rem;')).toBe('leading-22')
  })

  it('line-height: 100%;', () => {
    expect(generator('line-height: 100%;')).toBe('leading-100%')
  })

  it('line-height: 120%;', () => {
    expect(generator('line-height: 120%;')).toBe('leading-120%')
  })
})
