import { describe, it, expect } from 'vitest'
import { parse } from '../src/parse'
describe("test width", () => {
  it('parse a single attribute names', () => {
    expect(parse('width : 100')).toMatchInlineSnapshot(`
      [
        [
          "width",
        ],
        "100",
      ]
    `)
  })

  it('parse both attribute names', () => {
    expect(parse('background-color: red')).toMatchInlineSnapshot(`
      [
        [
          "background",
          "color",
        ],
        "red",
      ]
    `)
  })
})