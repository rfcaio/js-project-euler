
const get_sum_of_multiples = () => {
  let sum = 0
  for (let i = 3; i < 1000; i += 1) {
    sum += i % 3 === 0 || i % 5 === 0 ? i : 0
  }
  return sum
}
console.log(get_sum_of_multiples())
