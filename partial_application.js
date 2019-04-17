const multiply = (a, b, c) => a * b * c
const partialMultiply = multiply.bind(null, 5)

console.log(partialMultiply(5, 5))