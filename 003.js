
function is_prime (number) {
  if (number === 2) {
    return true
  }
  if (number % 2 === 0) {
    return false
  }
  for (let i = 3, ii = number / 2; i < ii; i += 2) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

let number = 600851475143
let result = 2
do {
  is_prime(result) && number % result === 0 ? number /= result : result += 1
} while (number !== 1)
console.log(result)
