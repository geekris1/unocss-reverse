import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('cursor', () => {
  it('cursor:auto', () => {
    expect(generator('cursor:auto')).toBe('cursor-auto')
  })

  it('cursor:default', () => {
    expect(generator('cursor:default')).toBe('cursor-default')
  })

  it('cursor:none', () => {
    expect(generator('cursor:none')).toBe('cursor-none')
  })

  it('cursor:context-menu', () => {
    expect(generator('cursor:context-menu')).toBe('cursor-context-menu')
  })

  it('cursor:help', () => {
    expect(generator('cursor:help')).toBe('cursor-help')
  })

  it('cursor:pointer', () => {
    expect(generator('cursor:pointer')).toBe('cursor-pointer')
  })

  it('cursor:progress', () => {
    expect(generator('cursor:progress')).toBe('cursor-progress')
  })

  it('cursor:wait', () => {
    expect(generator('cursor:wait')).toBe('cursor-wait')
  })

  it('cursor:cell', () => {
    expect(generator('cursor:cell')).toBe('cursor-cell')
  })

  it('cursor:crosshair', () => {
    expect(generator('cursor:crosshair')).toBe('cursor-crosshair')
  })

  it('cursor:text', () => {
    expect(generator('cursor:text')).toBe('cursor-text')
  })

  it('cursor:vertical-text', () => {
    expect(generator('cursor:vertical-text')).toBe('cursor-vertical-text')
  })

  it('cursor:alias', () => {
    expect(generator('cursor:alias')).toBe('cursor-alias')
  })

  it('cursor:copy', () => {
    expect(generator('cursor:copy')).toBe('cursor-copy')
  })

  it('cursor:move', () => {
    expect(generator('cursor:move')).toBe('cursor-move')
  })

  it('cursor:no-drop', () => {
    expect(generator('cursor:no-drop')).toBe('cursor-no-drop')
  })

  it('cursor:not-allowed', () => {
    expect(generator('cursor:not-allowed')).toBe('cursor-not-allowed')
  })

  it('cursor:grab', () => {
    expect(generator('cursor:grab')).toBe('cursor-grab')
  })

  it('cursor:grabbing', () => {
    expect(generator('cursor:grabbing')).toBe('cursor-grabbing')
  })

  it('cursor:all-scroll', () => {
    expect(generator('cursor:all-scroll')).toBe('cursor-all-scroll')
  })

  it('cursor:col-resize', () => {
    expect(generator('cursor:col-resize')).toBe('cursor-col-resize')
  })

  it('cursor:row-resize', () => {
    expect(generator('cursor:row-resize')).toBe('cursor-row-resize')
  })

  it('cursor:n-resize', () => {
    expect(generator('cursor:n-resize')).toBe('cursor-n-resize')
  })

  it('cursor:e-resize', () => {
    expect(generator('cursor:e-resize')).toBe('cursor-e-resize')
  })

  it('cursor:s-resize', () => {
    expect(generator('cursor:s-resize')).toBe('cursor-s-resize')
  })

  it('cursor:w-resize', () => {
    expect(generator('cursor:w-resize')).toBe('cursor-w-resize')
  })

  it('cursor:ne-resize', () => {
    expect(generator('cursor:ne-resize')).toBe('cursor-ne-resize')
  })

  it('cursor:nw-resize', () => {
    expect(generator('cursor:nw-resize')).toBe('cursor-nw-resize')
  })

  it('cursor:se-resize', () => {
    expect(generator('cursor:se-resize')).toBe('cursor-se-resize')
  })

  it('cursor:sw-resize', () => {
    expect(generator('cursor:sw-resize')).toBe('cursor-sw-resize')
  })

  it('cursor:ew-resize', () => {
    expect(generator('cursor:ew-resize')).toBe('cursor-ew-resize')
  })

  it('cursor:ns-resize', () => {
    expect(generator('cursor:ns-resize')).toBe('cursor-ns-resize')
  })

  it('cursor:nesw-resize', () => {
    expect(generator('cursor:nesw-resize')).toBe('cursor-nesw-resize')
  })

  it('cursor:nwse-resize', () => {
    expect(generator('cursor:nwse-resize')).toBe('cursor-nwse-resize')
  })

  it('cursor:zoom-in', () => {
    expect(generator('cursor:zoom-in')).toBe('cursor-zoom-in')
  })

  it('cursor:zoom-out', () => {
    expect(generator('cursor:zoom-out')).toBe('cursor-zoom-out')
  })

  it('cursor: url("hyper.cur"), auto;', () => {
    expect(generator('cursor: url("hyper.cur"), auto;')).toBe('cursor-[url("hyper.cur"),auto]')
  })

  it('cursor: url(hyper.cur), auto;', () => {
    expect(generator('cursor: url(hyper.cur), auto;')).toBe('cursor-[url(hyper.cur),auto]')
  })
})
