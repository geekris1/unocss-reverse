import { describe, it, expect } from 'vitest'
import { generator } from '../src/generator'
describe("height", () => {
  it('height:1px', () => {
    expect(generator("height:1px")).toBe("h-1px")
  })

  it('height:1em', () => {
    expect(generator("height:1em")).toBe("h-1em")
  })

  it('height:1rem', () => {
    expect(generator("height:1rem")).toBe("h-4")
  })

  it('height: max-content', () => {
    expect(generator("height: max-content")).toBe("h-max")
  })

  it(' height:min-content', () => {
    expect(generator(" height:min-content")).toBe("h-min")
  })

  it(' height:fit-content', () => {
    expect(generator(" height:fit-content")).toBe("h-fit")
  })

  it(' height:auto', () => {
    expect(generator(" height:auto")).toBe("h-auto")
  })
  it(' height:calc(100% - 50px)', () => {
    expect(generator(" height:calc(100% - 50px)")).toBe("h-[calc(100%-50px)]")
  })

  it(' height:calc(100%-50px)', () => {
    expect(generator(" height:calc(100%-50px)")).toBe("h-[calc(100%-50px)]")
  })

  it(' height:calc(100%  -  50px)', () => {
    expect(generator(" height:calc(100%  -  50px)")).toBe("h-[calc(100%-50px)]")
  })
})