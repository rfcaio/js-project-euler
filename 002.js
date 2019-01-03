
const fib = n => {
  if (n === 1 || n === 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}
let element = null
let i = 1
let sum = 0
do {
  element = fib(i)
  sum += element % 2 === 0 ? element : 0
  i++
} while (element < 4000000)
console.log(sum)
