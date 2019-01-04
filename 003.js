
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
const maxPrimeFactor = n => {
  let factor = 2
  do {
    if (isPrime(factor) && n % factor === 0) {
      n /= factor
    } else {
      factor += 1
    }
  } while (n !== 1)
  return factor
}
console.log(maxPrimeFactor(600851475143))
