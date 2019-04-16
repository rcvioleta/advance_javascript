// deep cloning objects
/*
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
*/

// functional programming
const User = name => {
  const state = {
    name,
    cart: []
  }

  return Object.assign(state, purchase(state))
}

const purchase = state => ({
  addToCart: (item) => {
    const newCart = state.cart
    newCart.push(item)
    // state.cart = [...newCart]
    // return state.cart
    return newCart
  }
})

const user = User('John Doe')
user.addToCart('mango')
user.addToCart('banana')
console.log(user.addToCart('apple'))
user 