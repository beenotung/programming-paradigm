// reference: https://en.wikipedia.org/wiki/Factorial

let n: number = 0
let result: number = 1

function factorial_inner(): void {
  if (n == 0) {
  } else {
    result = result * n
    n = n - 1
    factorial_inner()
  }
}

function factorial(): void {
  result = 1
  factorial_inner()
}

n = 1
factorial()
console.log('The factorial of 1 is:', result) // 1

n = 2
factorial()
console.log('The factorial of 2 is:', result) // 2

n = 5
factorial()
console.log('The factorial of 5 is:', result) // 120

n = 10
factorial()
console.log('The factorial of 10 is:', result) // 3628800
