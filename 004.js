
const is_palindromic = number => {
  return number == number.toString().split('').reverse().join('')
}
const get_largest_palindrome = () => {
  let result = 0
  for (let i = 100; i < 999; i += 1) {
    for (let j = 100; j < 999; j += 1) {
      if (is_palindromic(i * j) && result < i * j) {
        result = i * j
      }
    }
  }
  return result
}
console.log(get_largest_palindrome())
