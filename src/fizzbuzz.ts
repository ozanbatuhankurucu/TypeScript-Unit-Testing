export function fizzBuzz(numbers: number[]) {
  let result: Array<string> = []

  numbers.forEach((number: number) => {
    if (number % 15 === 0) {
      result.push('fizzbuzz')
    } else if (number % 3 === 0) {
      result.push('fizz')
    } else if (number % 5 === 0) {
      result.push('buzz')
    } else {
      result.push(number.toString())
    }
  })

  return result.join(', ')
}
