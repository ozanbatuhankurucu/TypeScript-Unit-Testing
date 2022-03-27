import { add } from '../index'

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(add('')).toBe(0)
  })
  test('passing a single number should result in the number itself', () => {
    expect(add('1')).toBe(1)
  })
  test('code throws the expected exception if you pass negative numbers', () => {
    expect(() => add('-1,-2,-3,5,7,2')).toThrow(RangeError)
  })
  test('passing a string with several numbers and verify whether the result is expected', () => {
    expect(add('1,2,3,4,5,6')).toBe(21)
  })
})
