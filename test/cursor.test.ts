import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('cursor', () => {
  it('cursor: pointer', () => {
    expect(generator('cursor: pointer')).toBe('cursor-pointer')
  })

  it('cursor: default', () => {
    expect(generator('cursor: default')).toBe('cursor-default')
  })

  it('cursor: grab', () => {
    expect(generator('cursor: grab')).toBe('cursor-grab')
  })

  it('cursor: help', () => {
    expect(generator('cursor: help')).toBe('cursor-help')
  })

  it('cursor: none', () => {
    expect(generator('cursor: none')).toBe('cursor-none')
  })

  it('cursor: zoom-in', () => {
    expect(generator('cursor: zoom-in')).toBe('cursor-zoom-in')
  })

  it('cursor: url("hyper.cur"), auto;', () => {
    expect(generator('cursor: url("hyper.cur"), auto;')).toBe('cursor-[url("hyper.cur"),auto]')
  })

  it('cursor: url(hyper.cur), auto;', () => {
    expect(generator('cursor: url(hyper.cur), auto;')).toBe('cursor-[url(hyper.cur),auto]')
  })
})
