// Compose
const compose = (f, g) => data => f(g(data))
const multiplyBy3 = num => num * 3
const makeAbsolute = num => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makeAbsolute)
console.log(multiplyBy3AndAbsolute(-50))

// Pipe
const pipe = (f, g) => data => g(f(data))
const multiplyBy3AndAbsolute2 = compose(multiplyBy3, makeAbsolute)
console.log(multiplyBy3AndAbsolute2(-50))