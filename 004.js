
function is_palindromic (number) {
  /* eslint-disable-next-line eqeqeq */
  return number == number.toString().split('').reverse().join('')
}

let result = 0
for (let i = 100; i < 999; i += 1) {
  for (let j = 100; j < 999; j += 1) {
    if (is_palindromic(i * j) && result < i * j) {
      result = i * j
    }
  }
}
console.log(result)
