
const sum_of_square = numbers => {
  return numbers.reduce((total, number) => total + number ** 2, 0)
}
const square_of_sum = numbers => {
  return numbers.reduce((total, number) => total + number, 0) ** 2
}
let numbers = Array.from(new Array(100), (number, index) => index + 1)
console.log(square_of_sum(numbers) - sum_of_square(numbers))
