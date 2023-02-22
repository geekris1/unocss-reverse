import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'

describe('color', () => {
  it('color:red', () => {
    expect(generator('color:red')).toBe('c-red')
  })

  it('color:rgba(1,1,1,100)', () => {
    expect(generator('color:rgba(1,1,1,100)')).toBe('c-[rgba(1,1,1,100)]')
  })

  it('color:rgba(1,1,1,100)', () => {
    expect(generator('color:rgba(1,1,1,100)')).toBe('c-[rgba(1,1,1,100)]')
  })

  it('color:#fff', () => {
    expect(generator('color:#fff')).toBe('c-[#fff]')
  })

  it('color:currentColor', () => {
    expect(generator('color:currentColor')).toBe('c-current')
  })
  it('color:inherit', () => {
    expect(generator('color:inherit')).toBe('c-inherit')
  })
  it('color:transparent', () => {
    expect(generator('color:transparent')).toBe('c-transparent')
  })
})
