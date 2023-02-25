import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('background', () => {
  it('background:red', () => {
    expect(generator('background:red')).toBe('bg-red')
  })

  it('background:auto', () => {
    expect(generator('background:auto')).toBe('bg-auto')
  })

  it('background-position:center center', () => {
    expect(generator('background-position:center center')).toBe('bg-center-center')
  })
})

describe('background-size', () => {
  it('background-size:auto', () => {
    expect(generator('background-size:auto')).toBe('bg-auto')
  })

  it('background-size:cover', () => {
    expect(generator('background-size:cover')).toBe('bg-cover')
  })

  it('background-size:contain', () => {
    expect(generator('background-size:contain')).toBe('bg-contain')
  })
})

describe('background-attachment', () => {
  it('background-attachment:fixed', () => {
    expect(generator('background-attachment:fixed')).toBe('bg-fixed')
  })
  it('background-attachment:local', () => {
    expect(generator('background-attachment:local')).toBe('bg-local')
  })
  it('background-attachment:scroll', () => {
    expect(generator('background-attachment:scroll')).toBe('bg-scroll')
  })
})

describe('background-clip', () => {
  it('background-clip:border-box', () => {
    expect(generator('background-clip:border-box')).toBe('bg-clip-border')
  })
  it('background-clip:content-box', () => {
    expect(generator('background-clip:content-box')).toBe('bg-clip-content')
  })
  it('background-clip:border-padding-box', () => {
    expect(generator('background-clip:padding-box')).toBe('bg-clip-padding')
  })
  it('background-clip:border-text', () => {
    expect(generator('background-clip:text')).toBe('bg-clip-text')
  })
  it('background-clip:border-inherit', () => {
    expect(generator('background-clip:inherit')).toBe('bg-clip-inherit')
  })
  it('background-clip:border-initial', () => {
    expect(generator('background-clip:initial')).toBe('bg-clip-initial')
  })
  it('background-clip:border-revert', () => {
    expect(generator('background-clip:revert')).toBe('bg-clip-revert')
  })
  it('background-clip:border-revert-layer', () => {
    expect(generator('background-clip:revert-layer')).toBe('bg-clip-revert-layer')
  })
  it('background-clip:border-unset', () => {
    expect(generator('background-clip:unset')).toBe('bg-clip-unset')
  })
})

describe('background-position', () => {
  it('background-position:top', () => {
    expect(generator('background-position:top')).toBe('bg-top')
  })
  it('background-position:top center', () => {
    expect(generator('background-position:top center')).toBe('bg-top-center')
  })
  it('background-position:top left', () => {
    expect(generator('background-position:top left')).toBe('bg-top-left')
  })
})

describe('background-repeats', () => {
  it('background-repeat:repeat', () => {
    expect(generator('background-repeat:repeat')).toBe('bg-repeat')
  })
  it('background-repeat:no-repeat', () => {
    expect(generator('background-repeat:no-repeat')).toBe('bg-no-repeat')
  })
  it('background-repeat:repeat-x', () => {
    expect(generator('background-repeat:repeat-x')).toBe('bg-repeat-x')
  })
  it('background-repeat:repeat-y', () => {
    expect(generator('background-repeat:repeat-y')).toBe('bg-repeat-y')
  })
  it('background-repeat:round', () => {
    expect(generator('background-repeat:round')).toBe('bg-repeat-round')
  })
  it('background-repeat:space', () => {
    expect(generator('background-repeat:space')).toBe('bg-repeat-space')
  })
  it('background-repeat:inherit', () => {
    expect(generator('background-repeat:inherit')).toBe('bg-repeat-inherit')
  })
  it('background-repeat:initial', () => {
    expect(generator('background-repeat:initial')).toBe('bg-repeat-initial')
  })
  it('background-repeat:revert', () => {
    expect(generator('background-repeat:revert')).toBe('bg-repeat-revert')
  })
  it('background-repeat:revert-layer', () => {
    expect(generator('background-repeat:revert-layer')).toBe('bg-repeat-revert-layer')
  })
  it('background-repeat:unset', () => {
    expect(generator('background-repeat:unset')).toBe('bg-repeat-unset')
  })
})

describe('background-repeats', () => {
  it('background-origin:border-box', () => {
    expect(generator('background-origin:border-box')).toBe('bg-origin-border')
  })
  it('background-origin:padding-box', () => {
    expect(generator('background-origin:padding-box')).toBe('bg-origin-padding')
  })
  it('background-origin:content-box', () => {
    expect(generator('background-origin:content-box')).toBe('bg-origin-content')
  })
  it('background-origin:inherit', () => {
    expect(generator('background-origin:inherit')).toBe('bg-origin-inherit')
  })
  it('background-origin:initial', () => {
    expect(generator('background-origin:initial')).toBe('bg-origin-initial')
  })
  it('background-origin:revert', () => {
    expect(generator('background-origin:revert')).toBe('bg-origin-revert')
  })
  it('background-origin:revert-layer', () => {
    expect(generator('background-origin:revert-layer')).toBe('bg-origin-revert-layer')
  })
  it('background-origin:unset', () => {
    expect(generator('background-origin:unset')).toBe('bg-origin-unset')
  })
})

describe('background-repeats', () => {
  it('background-image:none', () => {
    expect(generator('background-image:none')).toBe('bg-none')
  })

  it('background-image:url(\'picture.png\')', () => {
    expect(generator('background-image:url(\'picture.png\')')).toBe('bg-[url(\'picture.png\')]')
  })
})

describe('background-color', () => {
  it('background-color:#fff', () => {
    expect(generator('background-color:#fff')).toBe('bg-[#fff]')
  })

  it('background-color:red', () => {
    expect(generator('background-color:red')).toBe('bg-red')
  })

  it('background-color:rgba(255,255,255,1)', () => {
    expect(generator('background-color:rgba(255,255,255,1)')).toBe('bg-[rgba(255,255,255,1)]')
  })

  it('background-color:currentColor', () => {
    expect(generator('background-color:currentColor')).toBe('bg-current')
  })
  it('background-color:inherit', () => {
    expect(generator('background-color:inherit')).toBe('bg-inherit')
  })
  it('background-color:transparent', () => {
    expect(generator('background-color:transparent')).toBe('bg-transparent')
  })
})
