/**
 * Implement a cart feature:
 * 1. Add items to cart.
 * 2. Add 3% tax to item in cart
 * 3. Buy item: cart -> purchases
 * 4. Empty cart
 */

const user = {
  name: 'John Doe',
  active: true,
  cart: [],
  purchases: []
}

function addItemsToCart(user, item) {
  const newCart = user.cart.concat(item)
  return Object.assign({}, user, {
    cart: newCart
  })
}

function applyTaxToItems(user) {
  const {
    cart
  } = user
  const taxRate = 1.2
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, {
    cart: updatedCart
  })
}

function buyItems(user) {
  return Object.assign({}, user, {
    purchases: user.cart
  })
}

function emptyCart(user) {
  return Object.assign({}, user, {
    cart: []
  })
}

const compose = (f, g) => (...args) => f(g(...args))

function purchase(...fns) {
  return fns.reduce(compose)
}

console.log(purchase(
  emptyCart,
  buyItems,
  applyTaxToItems,
  addItemsToCart
)(user, {
  name: 'MSI Motherboard',
  price: 3700
}))