import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('background', () => {
  it('background:red', () => {
    expect(generator('background:red')).toBe('bg-red')
  })

  it('background:auto', () => {
    expect(generator('background:auto')).toBe('bg-auto')
  })
  // size
  it('background-size:auto', () => {
    expect(generator('background-size:auto')).toBe('bg-auto')
  })

  it('background-size:cover', () => {
    expect(generator('background-size:cover')).toBe('bg-cover')
  })

  it('background-size:contain', () => {
    expect(generator('background-size:contain')).toBe('bg-contain')
  })

  // attachments
  it('background-attachments:fixed', () => {
    expect(generator('background-attachments:fixed')).toBe('bg-fixed')
  })

  // clip
  it('background-clip:border-box', () => {
    expect(generator('background-clip:border-box')).toBe('bg-clip-border')
  })

  it('background-clip:test', () => {
    expect(generator('background-clip:test')).toBe('bg-clip-test')
  })

  // position
  it('background-position:center', () => {
    expect(generator('background-position:center')).toBe('bg-center')
  })

  it('background-position:center center', () => {
    expect(generator('background-position:center center')).toBe('bg-center-center')
  })

  // repeats
  it('background-repeat:repeat', () => {
    expect(generator('background-repeat:repeat')).toBe('bg-repeat')
  })

  it('background-repeat:no-repeat', () => {
    expect(generator('background-repeat:no-repeat')).toBe('bg-no-repeat')
  })

  it('background-repeat:repeat-x', () => {
    expect(generator('background-repeat:repeat-x')).toBe('bg-repeat-x')
  })

  it('background-repeat:inherit', () => {
    expect(generator('background-repeat:inherit')).toBe('bg-repeat-inherit')
  })

  // origins
  it('background-origin:border-box', () => {
    expect(generator('background-origin:border-box')).toBe('bg-origin-border')
  })

  it('background-origin:inherit', () => {
    expect(generator('background-origin:inherit')).toBe('bg-origin-inherit')
  })

  // image
  it('background-image:none', () => {
    expect(generator('background-image:none')).toBe('bg-none')
  })

  it('background-image:url(\'picture.png\')', () => {
    expect(generator('background-image:url(\'picture.png\')')).toBe('bg-[url(\'picture.png\')]')
  })
})
