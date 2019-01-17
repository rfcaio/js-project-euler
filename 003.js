const { is_prime } = require('./utils')

const max_prime_factor_of = n => {
  let factor = 2
  do {
    if (is_prime(factor) && n % factor === 0) {
      n /= factor
    } else {
      factor += 1
    }
  } while (n !== 1)
  return factor
}
console.log(max_prime_factor_of(600851475143))
