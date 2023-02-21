import { describe, it, expect } from 'vitest'
import { generator } from '../src/generator'
describe("width", () => {
  it('px', () => {
    expect(generator("width:1px")).toBe("w-1px")
  })

  it('em', () => {
    expect(generator("width:1em")).toBe("w-1em")
  })

  it('rem', () => {
    expect(generator("width:1rem")).toBe("w-4")
  })

  it('max-content', () => {
    expect(generator("width: max-content")).toBe("w-max")
  })

  it('min-content', () => {
    expect(generator(" width:min-content")).toBe("w-min")
  })

  it('fit-content', () => {
    expect(generator(" width:fit-content")).toBe("w-fit")
  })

  it('auto', () => {
    expect(generator(" width:auto")).toBe("w-auto")
  })

  it('calc', () => {
    expect(generator(" width:calc(100% - 50px)")).toBe("w-[calc(100%-50px)]")
  })

  it('calc not space', () => {
    expect(generator(" width:calc(100%-50px)")).toBe("w-[calc(100%-50px)]")
  })

  it('calc space', () => {
    expect(generator(" width:calc(100%  -  50px)")).toBe("w-[calc(100%-50px)]")
  })
})