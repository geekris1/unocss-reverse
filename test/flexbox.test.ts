import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('align-items', () => {
  it('align-items: center', () => {
    expect(generator('align-items: center')).toBe('items-center')
  })

  it('align-items: flex-start;', () => {
    expect(generator('align-items: flex-start;')).toBe('items-start')
  })

  it('align-items: flex-end;', () => {
    expect(generator('align-items: flex-end;')).toBe('items-end')
  })

  it('align-items: revert-layer;', () => {
    expect(generator('align-items: revert-layer;')).toBe('items-revert-layer')
  })
})

describe('align-content', () => {
  it('align-content: center', () => {
    expect(generator('align-content: center')).toBe('content-center')
  })
})

describe('align-self', () => {
  it('align-self: center', () => {
    expect(generator('align-self: center')).toBe('self-center')
  })

  it('align-self: flex-start;', () => {
    expect(generator('align-self: flex-start;')).toBe('self-start')
  })
})

describe('justify-content', () => {
  it('justify-content: center', () => {
    expect(generator('justify-content: center')).toBe('justify-center')
  })

  it('justify-content: flex-start;', () => {
    expect(generator('justify-content: flex-start;')).toBe('justify-start')
  })

  it('justify-content: flex-end;', () => {
    expect(generator('justify-content: flex-end;')).toBe('justify-end')
  })

  it('justify-content: space-around;', () => {
    expect(generator('justify-content: space-around;')).toBe('justify-around')
  })

  it('justify-content: space-evenly;', () => {
    expect(generator('justify-content: space-evenly;')).toBe('justify-evenly')
  })

  it('justify-content: space-between;', () => {
    expect(generator('justify-content: space-between;')).toBe('justify-between')
  })

  it('justify-content: revert-layer;', () => {
    expect(generator('justify-content: revert-layer;')).toBe('justify-revert-layer')
  })
})

describe('justify-self', () => {
  it('justify-self: center', () => {
    expect(generator('justify-self: center')).toBe('justify-self-center')
  })
})

describe('place-items', () => {
  it('place-items: start;', () => {
    expect(generator('place-items: start;')).toBe('place-items-start')
  })
})

describe('place-self', () => {
  it('place-self: auto;', () => {
    expect(generator('place-self: auto;')).toBe('place-self-auto')
  })

  it('place-self: end;', () => {
    expect(generator('place-self: end;')).toBe('place-self-end')
  })
})
