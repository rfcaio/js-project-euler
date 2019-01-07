
let sum = 0
let sumOfSquares = 0
for (let i = 1; i <= 100; i += 1) {
  sum += i
  sumOfSquares += i ** 2
}
let squareOfSum = sum ** 2
console.log(squareOfSum - sumOfSquares)
