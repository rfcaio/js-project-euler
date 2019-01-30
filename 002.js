
function fibonacci (n) {
  return (n === 1 || n === 2) ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

let i = 1
let result = 0
while (true) {
  let element = fibonacci(i++)
  if (element > 4000000) {
    break
  }
  result += element % 2 === 0 ? element : 0
}
console.log(result)
