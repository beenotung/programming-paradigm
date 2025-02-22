let numbers: number[] = []
let total: number = 0

// malloc(sizeof(int) * 80)
// 0..31 username
// 32..63 password
// 64 is_admin

export function sum() {
  total = 0
  for (let number of numbers) {
    total += number
  }
  return total
}

numbers = [1, 2, 3, 4, 5]
sum()
console.log('The sum of numbers is:', total)

numbers = [10, 20, 14, 15, 36]
sum()
console.log('The average score is:', total / numbers.length)
