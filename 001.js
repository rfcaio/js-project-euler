
let result = 0
for (let i = 3; i < 1000; i += 1) {
  result += i % 3 === 0 || i % 5 === 0 ? i : 0
}
console.log(result)
