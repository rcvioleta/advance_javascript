function multiplyBy(num1) {
  return function (num2) {
    return num1 * num2
  }
}

const multiplyByTwo = multiplyBy(6)
console.log(multiplyByTwo(6))


const multiply = a => b => a * b
const multiplyByFive = multiply(5)
console.log(multiplyByFive(5))