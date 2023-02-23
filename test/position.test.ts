import { describe, expect, it } from 'vitest'
import { generator } from '../src/generator'
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
