import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'

describe('float', () => {
  it('float:right', () => {
    expect(generator('float:right')).toBe('float-right')
  })

  it('float:left', () => {
    expect(generator('float:left')).toBe('float-left')
  })
})

describe('clear', () => {
  it('clear:right', () => {
    expect(generator('clear:right')).toBe('clear-right')
  })

  it('clear:left', () => {
    expect(generator('clear:left')).toBe('clear-left')
  })

  it('clear:both', () => {
    expect(generator('clear:both')).toBe('clear-both')
  })
})

describe('justify-items', () => {
  it('justify-items: center;', () => {
    expect(generator('justify-items: center;')).toBe('justify-items-center')
  })

  it('justify-items: start;', () => {
    expect(generator('justify-items: start;')).toBe('justify-items-start')
  })

  it('justify-items: revert-layer;', () => {
    expect(generator('justify-items: revert-layer;')).toBe('justify-items-revert-layer')
  })
})
