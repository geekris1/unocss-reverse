import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('display', () => {
  it('display: block', () => {
    expect(generator('display: block')).toBe('block')
  })

  it('display: inline', () => {
    expect(generator('display: inline')).toBe('inline')
  })

  it('display: inline-block', () => {
    expect(generator('display: inline-block')).toBe('inline-block')
  })

  it('display: flex', () => {
    expect(generator('display: flex')).toBe('flex')
  })

  it('display: inline-flex', () => {
    expect(generator('display: inline-flex')).toBe('inline-flex')
  })

  it('display: grid', () => {
    expect(generator('display: grid')).toBe('grid')
  })

  it('display: inline-grid', () => {
    expect(generator('display: inline-grid')).toBe('inline-grid')
  })

  it('display: flow-root', () => {
    expect(generator('display: flow-root')).toBe('flow-root')
  })

  it('display: contents', () => {
    expect(generator('display: contents')).toBe('contents')
  })
  it('display: none', () => {
    expect(generator('display: none')).toBe('hidden')
  })
})
