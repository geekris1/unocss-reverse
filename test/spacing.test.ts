import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('padding', () => {
  it('padding:50px', () => {
    expect(generator('padding:50px')).toBe('p-50px')
  })
  it('padding:-50px', () => {
    expect(generator('padding:-50px')).toBe('p--50px')
  })
  it('padding:50px 30px', () => {
    expect(generator('padding:50px 30px')).toBe('px-30px py-50px')
  })
  it('padding:50px 30px 20px', () => {
    expect(generator('padding:50px 30px 20px')).toBe('px-30px pt-50px pb-20px')
  })
  it('padding:50px 30px 20px 40px', () => {
    expect(generator('padding:50px 30px 20px 40px')).toBe('pt-50px pb-20px pl-40px pr-30px')
  })
  // it('padding:50px 30px 20px 40px 50px', () => {
  //   expect(generator('padding:50px 30px 20px 40px 50px')).toBeUndefined()
  // })
})

describe('padding-left', () => {
  it('padding-left:50px', () => {
    expect(generator('padding-left:50px')).toBe('pl-50px')
  })

  it('padding-left: calc(100% - 30px);', () => {
    expect(generator('padding-left: calc(100% - 30px);')).toBe('pl-[calc(100%-30px)]')
  })
})

describe('padding-right', () => {
  it('padding-right:50px', () => {
    expect(generator('padding-right:50px')).toBe('pr-50px')
  })
})

describe('padding-top', () => {
  it('padding-top:50px', () => {
    expect(generator('padding-top:50px')).toBe('pt-50px')
  })
})

describe('padding-bottom', () => {
  it('padding-bottom:50px', () => {
    expect(generator('padding-bottom:50px')).toBe('pb-50px')
  })
})

describe('margin', () => {
  it('margin:50px', () => {
    expect(generator('margin:50px')).toBe('m-50px')
  })
  it('margin:-50px', () => {
    expect(generator('margin:-50px')).toBe('m--50px')
  })
  it('margin:50px 30px', () => {
    expect(generator('margin:50px 30px')).toBe('mx-30px my-50px')
  })
  it('margin:50px 30px 20px', () => {
    expect(generator('margin:50px 30px 20px')).toBe('mx-30px mt-50px mb-20px')
  })
  it('margin:50px 30px 20px 40px', () => {
    expect(generator('margin:50px 30px 20px 40px')).toBe('mt-50px mb-20px ml-40px mr-30px')
  })

  it('margin: calc(100% - 30px);', () => {
    expect(generator('margin: calc(100% - 30px);')).toBe('m-[calc(100%-30px)]')
  })
})

describe('margin-left', () => {
  it('margin-left:50px', () => {
    expect(generator('margin-left:50px')).toBe('ml-50px')
  })
})

describe('margin-right', () => {
  it('margin-right:50px', () => {
    expect(generator('margin-right:50px')).toBe('mr-50px')
  })
})

describe('margin-top', () => {
  it('margin-top:50px', () => {
    expect(generator('margin-top:50px')).toBe('mt-50px')
  })

  it('margin-top: calc(100% - 30px);', () => {
    expect(generator('margin-top: calc(100% - 30px);')).toBe('mt-[calc(100%-30px)]')
  })
})

describe('margin-bottom', () => {
  it('margin-bottom:50px', () => {
    expect(generator('margin-bottom:50px')).toBe('mb-50px')
  })
})
