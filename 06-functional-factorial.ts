// reference: https://en.wikipedia.org/wiki/Factorial

export function factorial(n: number): number {
  if (n == 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

console.log('The factorial of 1 is:', factorial(1)) // 1

console.log('The factorial of 2 is:', factorial(2)) // 2

console.log('The factorial of 5 is:', factorial(5)) // 120

console.log('The factorial of 10 is:', factorial(10)) // 3628800
