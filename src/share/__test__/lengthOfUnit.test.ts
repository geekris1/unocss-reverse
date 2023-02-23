import { describe, expect, it } from 'vitest'
import { isLengthOfUnit, unitOfLengthTransform } from '../lengthOfUnit'

describe('unitOfLengthTransform test', () => {
  it('1px', () => {
    expect(unitOfLengthTransform('1px')).toBe('1px')
  })

  it('1rem', () => {
    expect(unitOfLengthTransform('1rem')).toBe('4')
  })
  it('error property 1', () => {
    expect(unitOfLengthTransform('1')).toBeUndefined()
  })

  it('error property 1ee', () => {
    expect(unitOfLengthTransform('1ee')).toBeUndefined()
  })
})

describe('isUnitOfLength test', () => {
  it('1px', () => {
    expect(isLengthOfUnit('1px')).toBeTruthy()
  })

  it('1rem', () => {
    expect(isLengthOfUnit('1rem')).toBeTruthy()
  })
  it('error property 1', () => {
    expect(isLengthOfUnit('1')).toBeFalsy()
  })

  it('error property 1ee', () => {
    expect(isLengthOfUnit('1ee')).toBeFalsy()
  })
})
