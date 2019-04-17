const curriedMultiply = a => b => a * b

const multiplyBy5 = curriedMultiply(5)
console.log(multiplyBy5(3))