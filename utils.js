
const is_prime = number => {
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

module.exports = { is_prime }
