import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'

describe('justify-content', () => {
  it('justify-content: center', () => {
    expect(generator('justify-content: center')).toBe('justify-center')
  })

  it('justify-content: flex-start;', () => {
    expect(generator('justify-content: flex-start;')).toBe('justify-start')
  })

  it('justify-content: flex-end;', () => {
    expect(generator('justify-content: flex-end;')).toBe('justify-end')
  })

  it('justify-content: space-around;', () => {
    expect(generator('justify-content: space-around;')).toBe('justify-around')
  })

  it('justify-content: space-evenly;', () => {
    expect(generator('justify-content: space-evenly;')).toBe('justify-evenly')
  })

  it('justify-content: space-between;', () => {
    expect(generator('justify-content: space-between;')).toBe('justify-between')
  })

  it('justify-content: revert-layer;', () => {
    expect(generator('justify-content: revert-layer;')).toBe('justify-revert-layer')
  })
})
