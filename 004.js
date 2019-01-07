
const isPalindromic = number => number == number.toString().split('').reverse().join('')
let largestPalindrome = 0
for (let i = 100; i < 999; i += 1) {
  for (let j = 100; j < 999; j += 1) {
    if (isPalindromic(i * j) && largestPalindrome < i * j) {
      largestPalindrome = i * j
    }
  }
}
console.log(largestPalindrome)
