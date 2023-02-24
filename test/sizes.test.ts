import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'
describe('width', () => {
  it('px', () => {
    expect(generator('width:1px')).toBe('w-1px')
  })

  it('em', () => {
    expect(generator('width:1em')).toBe('w-1em')
  })

  it('rem', () => {
    expect(generator('width:1rem')).toBe('w-4')
  })

  it('max-content', () => {
    expect(generator('width: max-content')).toBe('w-max')
  })

  it('min-content', () => {
    expect(generator(' width:min-content')).toBe('w-min')
  })

  it('fit-content', () => {
    expect(generator(' width:fit-content')).toBe('w-fit')
  })

  it('auto', () => {
    expect(generator(' width:auto')).toBe('w-auto')
  })

  it('calc', () => {
    expect(generator(' width:calc(100% - 50px)')).toBe('w-[calc(100%-50px)]')
  })

  it('calc not space', () => {
    expect(generator(' width:calc(100%-50px)')).toBe('w-[calc(100%-50px)]')
  })

  it('calc space', () => {
    expect(generator(' width:calc(100%  -  50px)')).toBe('w-[calc(100%-50px)]')
  })
})

describe('height', () => {
  it('height:1px', () => {
    expect(generator('height:1px')).toBe('h-1px')
  })

  it('height:1em', () => {
    expect(generator('height:1em')).toBe('h-1em')
  })

  it('height:1rem', () => {
    expect(generator('height:1rem')).toBe('h-4')
  })

  it('height: max-content', () => {
    expect(generator('height: max-content')).toBe('h-max')
  })

  it(' height:min-content', () => {
    expect(generator(' height:min-content')).toBe('h-min')
  })

  it(' height:fit-content', () => {
    expect(generator(' height:fit-content')).toBe('h-fit')
  })

  it(' height:auto', () => {
    expect(generator(' height:auto')).toBe('h-auto')
  })
  it(' height:calc(100% - 50px)', () => {
    expect(generator(' height:calc(100% - 50px)')).toBe('h-[calc(100%-50px)]')
  })

  it(' height:calc(100%-50px)', () => {
    expect(generator(' height:calc(100%-50px)')).toBe('h-[calc(100%-50px)]')
  })

  it(' height:calc(100%  -  50px)', () => {
    expect(generator(' height:calc(100%  -  50px)')).toBe('h-[calc(100%-50px)]')
  })
})

describe('max-width', () => {
  it('max-width:50px', () => {
    expect(generator('max-width:50px')).toBe('max-w-50px')
  })

  it('max-width:max-content', () => {
    expect(generator('max-width:max-content')).toBe('max-w-max')
  })

  it('max-height:50px', () => {
    expect(generator('max-height:50px')).toBe('max-h-50px')
  })

  it('max-height:max-content', () => {
    expect(generator('max-height:max-content')).toBe('max-h-max')
  })
})
