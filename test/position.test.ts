import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'
describe('position', () => {
  it('position:static', () => {
    expect(generator('position:static')).toBe('pos-static')
  })
  it('position:relative', () => {
    expect(generator('position:relative')).toBe('pos-relative')
  })
  it('position:absolute', () => {
    expect(generator('position:absolute')).toBe('pos-absolute')
  })
  it('position:fixed', () => {
    expect(generator('position:fixed')).toBe('pos-fixed')
  })
  it('position:sticky', () => {
    expect(generator('position:sticky')).toBe('pos-sticky')
  })
})

describe('z-index', () => {
  it('z-index:1', () => {
    expect(generator('z-index:1')).toBe('z-1')
  })
  it('z-index:-1', () => {
    expect(generator('z-index:-1')).toBe('z--1')
  })
  it('z-index:0', () => {
    expect(generator('z-index:0')).toBe('z-0')
  })
  it('z-index:auto', () => {
    expect(generator('z-index:auto')).toBe('z-auto')
  })
})

describe('left', () => {
  it('left:1rem', () => {
    expect(generator('left:1rem')).toBe('left-4')
  })
  it('left:1px', () => {
    expect(generator('left:1px')).toBe('left-1px')
  })
  it('left:auto', () => {
    expect(generator('left:auto')).toBe('left-auto')
  })
  it('left:inherit', () => {
    expect(generator('left:inherit')).toBe('left-inherit')
  })
})

describe('right', () => {
  it('right:1rem', () => {
    expect(generator('right:1rem')).toBe('right-4')
  })
  it('right:1px', () => {
    expect(generator('right:1px')).toBe('right-1px')
  })
  it('right:auto', () => {
    expect(generator('right:auto')).toBe('right-auto')
  })
  it('right:inherit', () => {
    expect(generator('right:inherit')).toBe('right-inherit')
  })
})
describe('top', () => {
  it('top:1rem', () => {
    expect(generator('top:1rem')).toBe('top-4')
  })
  it('top:1px', () => {
    expect(generator('top:1px')).toBe('top-1px')
  })
  it('top:auto', () => {
    expect(generator('top:auto')).toBe('top-auto')
  })
  it('top:inherit', () => {
    expect(generator('top:inherit')).toBe('top-inherit')
  })
})
describe('bottom', () => {
  it('bottom:1rem', () => {
    expect(generator('bottom:1rem')).toBe('bottom-4')
  })
  it('bottom:1px', () => {
    expect(generator('bottom:1px')).toBe('bottom-1px')
  })
  it('bottom:auto', () => {
    expect(generator('bottom:auto')).toBe('bottom-auto')
  })
  it('bottom:inherit', () => {
    expect(generator('bottom:inherit')).toBe('bottom-inherit')
  })
})
