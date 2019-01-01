
let i = 3
let sum = 0
do {
  sum += i % 3 === 0 || i % 5 === 0 ? i : 0
  i += 1
} while (i < 1000)
console.log(sum)
