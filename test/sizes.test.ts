import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'
describe('width', () => {
  it('width:1px', () => {
    expect(generator('width:1px')).toBe('w-1px')
  })
  it('width:-1px', () => {
    expect(generator('width:-1px')).toBe('w--1px')
  })

  it('width:1em', () => {
    expect(generator('width:1em')).toBe('w-1em')
  })

  it('width:1rem', () => {
    expect(generator('width:1rem')).toBe('w-4')
  })

  it('width:calc(100% - 50px)', () => {
    expect(generator('width:calc(100% - 50px)')).toBe('w-[calc(100%-50px)]')
  })

  it('width: max-content', () => {
    expect(generator('width: max-content')).toBe('w-max')
  })

  it('width:min-content', () => {
    expect(generator('width:min-content')).toBe('w-min')
  })

  it('width:fit-content', () => {
    expect(generator('width:fit-content')).toBe('w-fit')
  })

  it('width:auto', () => {
    expect(generator('width:auto')).toBe('w-auto')
  })

  it('width:inherit', () => {
    expect(generator('width:inherit')).toBe('w-inherit')
  })

  it('width:initial', () => {
    expect(generator('width:initial')).toBe('w-initial')
  })

  it('width:unset', () => {
    expect(generator(' width:unset')).toBe('w-unset')
  })
})

describe('height', () => {
  it('height:1px', () => {
    expect(generator('height:1px')).toBe('h-1px')
  })
  it('height:-1px', () => {
    expect(generator('height:-1px')).toBe('h--1px')
  })

  it('height:1em', () => {
    expect(generator('height:1em')).toBe('h-1em')
  })

  it('height:1rem', () => {
    expect(generator('height:1rem')).toBe('h-4')
  })

  it('height:calc(100% - 50px)', () => {
    expect(generator('height:calc(100% - 50px)')).toBe('h-[calc(100%-50px)]')
  })

  it('height: max-content', () => {
    expect(generator('height: max-content')).toBe('h-max')
  })

  it('height:min-content', () => {
    expect(generator('height:min-content')).toBe('h-min')
  })

  it('height:fit-content', () => {
    expect(generator('height:fit-content')).toBe('h-fit')
  })

  it('height:auto', () => {
    expect(generator('height:auto')).toBe('h-auto')
  })

  it('height:inherit', () => {
    expect(generator('height:inherit')).toBe('h-inherit')
  })

  it('height:initial', () => {
    expect(generator('height:initial')).toBe('h-initial')
  })

  it('height:unset', () => {
    expect(generator(' height:unset')).toBe('h-unset')
  })
})

describe('max-width', () => {
  it('max-width:1px', () => {
    expect(generator('max-width:1px')).toBe('max-w-1px')
  })
  it('max-width:-1px', () => {
    expect(generator('max-width:-1px')).toBe('max-w--1px')
  })

  it('max-width:1em', () => {
    expect(generator('max-width:1em')).toBe('max-w-1em')
  })

  it('max-width:1rem', () => {
    expect(generator('max-width:1rem')).toBe('max-w-4')
  })

  it('max-width:calc(100% - 50px)', () => {
    expect(generator('max-width:calc(100% - 50px)')).toBe('max-w-[calc(100%-50px)]')
  })

  it('max-width: max-content', () => {
    expect(generator('max-width: max-content')).toBe('max-w-max')
  })

  it('max-width:min-content', () => {
    expect(generator('max-width:min-content')).toBe('max-w-min')
  })

  it('max-width:fit-content', () => {
    expect(generator('max-width:fit-content')).toBe('max-w-fit')
  })

  it('max-width:auto', () => {
    expect(generator('max-width:auto')).toBe('max-w-auto')
  })

  it('max-width:inherit', () => {
    expect(generator('max-width:inherit')).toBe('max-w-inherit')
  })

  it('max-width:initial', () => {
    expect(generator('max-width:initial')).toBe('max-w-initial')
  })

  it('max-width:unset', () => {
    expect(generator(' max-width:unset')).toBe('max-w-unset')
  })
})

describe('max-height', () => {
  it('max-height:1px', () => {
    expect(generator('max-height:1px')).toBe('max-h-1px')
  })
  it('max-height:-1px', () => {
    expect(generator('max-height:-1px')).toBe('max-h--1px')
  })

  it('max-height:1em', () => {
    expect(generator('max-height:1em')).toBe('max-h-1em')
  })

  it('max-height:1rem', () => {
    expect(generator('max-height:1rem')).toBe('max-h-4')
  })

  it('max-height:calc(100% - 50px)', () => {
    expect(generator('max-height:calc(100% - 50px)')).toBe('max-h-[calc(100%-50px)]')
  })

  it('max-height: max-content', () => {
    expect(generator('max-height: max-content')).toBe('max-h-max')
  })

  it('max-height:min-content', () => {
    expect(generator('max-height:min-content')).toBe('max-h-min')
  })

  it('max-height:fit-content', () => {
    expect(generator('max-height:fit-content')).toBe('max-h-fit')
  })

  it('max-height:auto', () => {
    expect(generator('max-height:auto')).toBe('max-h-auto')
  })

  it('max-height:inherit', () => {
    expect(generator('max-height:inherit')).toBe('max-h-inherit')
  })

  it('max-height:initial', () => {
    expect(generator('max-height:initial')).toBe('max-h-initial')
  })

  it('max-height:unset', () => {
    expect(generator(' max-height:unset')).toBe('max-h-unset')
  })
})

describe('min-width', () => {
  it('min-width:1px', () => {
    expect(generator('min-width:1px')).toBe('min-w-1px')
  })
  it('min-width:-1px', () => {
    expect(generator('min-width:-1px')).toBe('min-w--1px')
  })

  it('min-width:1em', () => {
    expect(generator('min-width:1em')).toBe('min-w-1em')
  })

  it('min-width:1rem', () => {
    expect(generator('min-width:1rem')).toBe('min-w-4')
  })

  it('min-width:calc(100% - 50px)', () => {
    expect(generator('min-width:calc(100% - 50px)')).toBe('min-w-[calc(100%-50px)]')
  })

  it('min-width: min-content', () => {
    expect(generator('min-width: max-content')).toBe('min-w-max')
  })

  it('min-width:min-content', () => {
    expect(generator('min-width:min-content')).toBe('min-w-min')
  })

  it('min-width:fit-content', () => {
    expect(generator('min-width:fit-content')).toBe('min-w-fit')
  })

  it('min-width:auto', () => {
    expect(generator('min-width:auto')).toBe('min-w-auto')
  })

  it('min-width:inherit', () => {
    expect(generator('min-width:inherit')).toBe('min-w-inherit')
  })

  it('min-width:initial', () => {
    expect(generator('min-width:initial')).toBe('min-w-initial')
  })

  it('min-width:unset', () => {
    expect(generator(' min-width:unset')).toBe('min-w-unset')
  })
})

describe('min-height', () => {
  it('min-height:1px', () => {
    expect(generator('min-height:1px')).toBe('min-h-1px')
  })
  it('min-height:-1px', () => {
    expect(generator('min-height:-1px')).toBe('min-h--1px')
  })

  it('min-height:1em', () => {
    expect(generator('min-height:1em')).toBe('min-h-1em')
  })

  it('min-height:1rem', () => {
    expect(generator('min-height:1rem')).toBe('min-h-4')
  })

  it('min-height:calc(100% - 50px)', () => {
    expect(generator('min-height:calc(100% - 50px)')).toBe('min-h-[calc(100%-50px)]')
  })

  it('min-height: min-content', () => {
    expect(generator('min-height: max-content')).toBe('min-h-max')
  })

  it('min-height:min-content', () => {
    expect(generator('min-height:min-content')).toBe('min-h-min')
  })

  it('min-height:fit-content', () => {
    expect(generator('min-height:fit-content')).toBe('min-h-fit')
  })

  it('min-height:auto', () => {
    expect(generator('min-height:auto')).toBe('min-h-auto')
  })

  it('min-height:inherit', () => {
    expect(generator('min-height:inherit')).toBe('min-h-inherit')
  })

  it('min-height:initial', () => {
    expect(generator('min-height:initial')).toBe('min-h-initial')
  })

  it('min-height:unset', () => {
    expect(generator(' min-height:unset')).toBe('min-h-unset')
  })
})
