import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'

describe('align-items', () => {
  it('align-items: center', () => {
    expect(generator('align-items: center')).toBe('items-center')
  })

  it('align-items: flex-start;', () => {
    expect(generator('align-items: flex-start;')).toBe('items-start')
  })

  it('align-items: flex-end;', () => {
    expect(generator('align-items: flex-end;')).toBe('items-end')
  })

  it('align-items: revert-layer;', () => {
    expect(generator('align-items: revert-layer;')).toBe('items-revert-layer')
  })
})
