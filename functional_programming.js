const User = name => {
  const state = {
    name,
    active: true,
    cart: [],
    purchases: []
  }

  return Object.assign(state, purchase(state), buy(state), reset(state), taxable(state))
}

const purchase = state => ({
  addToCart: (item) => {
    return state.cart.push(item)
  }
})

const buy = state => ({
  checkout: () => {
    return state.purchases.push(...state.cart)
  }
})

const reset = state => ({
  emptyCart: () => {
    state.cart = []
    return state.cart
  }
})

const taxable = state => ({
  addTax: () => {
    state.cart = [{
      items: {
        ...state.cart
      },
      tax: '3%'
    }]
  }
})

const items = [{
    name: 'Mango',
    price: 20
  },
  {
    name: 'MSI Motherboard',
    price: 15
  }
]

const newUser = User('Kentoy Elorde')

newUser.addToCart({
  item_name: items[0].name,
  price: items[0].price
})

newUser.addToCart({
  item_name: items[1].name,
  price: items[1].price
})

newUser.addTax()

// newUser.checkout()
// newUser.emptyCart()

console.log(JSON.stringify(newUser, undefined, 2))