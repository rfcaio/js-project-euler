
let result = 20
do {
  result += 20
} while (
  result % 20 !== 0 ||
  result % 19 !== 0 ||
  result % 18 !== 0 ||
  result % 17 !== 0 ||
  result % 16 !== 0 ||
  result % 14 !== 0 ||
  result % 13 !== 0 ||
  result % 11 !== 0
)
console.log(result)
