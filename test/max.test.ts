import { describe, it, expect } from 'vitest'
import { generator } from '../src/generator'
describe("position", () => {
  it('max-width:50px', () => {
    expect(generator("max-width:50px")).toBe("max-w-50px")
  })

  it('max-width:max-content', () => {
    expect(generator("max-width:max-content")).toBe("max-w-max")
  })

  it('max-height:50px', () => {
    expect(generator("max-height:50px")).toBe("max-h-50px")
  })

  it('max-height:max-content', () => {
    expect(generator("max-height:max-content")).toBe("max-h-max")
  })
})