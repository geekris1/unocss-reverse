import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'

describe('display', () => {
  it('display: block', () => {
    expect(generator('display: block')).toBe('block')
  })

  it('display: none', () => {
    expect(generator('display: none')).toBe('hidden')
  })

  it('display: inline-block', () => {
    expect(generator('display: inline-block')).toBe('inline-block')
  })
})
