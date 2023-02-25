import { describe, expect, it } from 'vitest'
import { generator } from '@/generator'

describe('text-align', () => {
  it('text-align: center;', () => {
    expect(generator('text-align: center;')).toBe('text-center')
  })

  it('text-align: left;', () => {
    expect(generator('text-align: left;')).toBe('text-left')
  })
})
