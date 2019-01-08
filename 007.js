
const isPrime = n => {
  if (n === 2) {
    return true
  }
  if (n % 2 === 0) {
    return false
  }
  for (let i = 3, ii = n / 2; i < ii; i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
let i = 2
let count = 0
while (true) {
  if (isPrime(i) && ++count === 10001) {
    break
  }
  i += 1
}
console.log(i)
