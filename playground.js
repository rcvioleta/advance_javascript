const a = [1, 2, 3, 4, 5]
const b = [...a]
b.push(6789)

console.log(a)


const obj = {
  name: 'John Doe',
  age: 26,
  address: {
    house_number: 123,
    street: '12th Street',
    city: 'Michigan',
    zip: 00217
  },
  civil_status: 'single'
}

function deepClone(obj, callback) {
  console.time('cloning time')
  callback(JSON.stringify(obj))
}

deepClone(obj, stringifiedObj => {
  console.log(JSON.parse(stringifiedObj))
  console.timeEnd('cloning time')
})