
function sum_of_square (serie) {
  return serie.reduce((total, number) => total + number ** 2, 0)
}

function square_of_sum (serie) {
  return serie.reduce((total, number) => total + number, 0) ** 2
}

let serie = Array.from(new Array(100), (number, index) => index + 1)
console.log(square_of_sum(serie) - sum_of_square(serie))
