import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('letter-spacing', () => {
  it('letter-spacing: -0.05em;', () => {
    expect(generator('letter-spacing: -0.05em;')).toBe('tracking-tighter')
  })

  it('letter-spacing: -0.025em;', () => {
    expect(generator('letter-spacing: -0.025em;')).toBe('tracking-tight')
  })

  it('letter-spacing: 0em;', () => {
    expect(generator('letter-spacing: 0em;')).toBe('tracking-normal')
  })

  it('letter-spacing: 0.025em;', () => {
    expect(generator('letter-spacing: 0.025em;')).toBe('tracking-wide')
  })

  it('letter-spacing: 0.05em;', () => {
    expect(generator('letter-spacing: 0.05em;')).toBe('tracking-wider')
  })

  it('letter-spacing: 0.1em;', () => {
    expect(generator('letter-spacing: 0.1em;')).toBe('tracking-widest')
  })

  it('letter-spacing: 0.5rem;', () => {
    expect(generator('letter-spacing: 0.5rem;')).toBe('tracking-2')
  })

  it('letter-spacing: 1rem;', () => {
    expect(generator('letter-spacing: 1rem;')).toBe('tracking-4')
  })

  it('letter-spacing: 2px;', () => {
    expect(generator('letter-spacing: 2px;')).toBe('tracking-2px')
  })

  it('letter-spacing: revert;', () => {
    expect(generator('letter-spacing: revert;')).toBe('tracking-revert')
  })

  it('letter-spacing: revert-layer;', () => {
    expect(generator('letter-spacing: revert-layer;')).toBe('tracking-revert-layer')
  })
})
