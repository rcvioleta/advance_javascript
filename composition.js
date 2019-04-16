// /* an example of classical inheritance */

// class Character {
//   constructor(name) {
//     this.name = name
//     this.health = 100
//   }
// }

// class Mage extends Character {
//   constructor(name) {
//     super(name)
//     this.mana = 100
//   }

//   castSpell() {
//     return 'Mage casting spell'
//   }
// }

// class Archer extends Character {
//   constructor(name) {
//     super(name)
//     this.agility = 1000
//   }

//   doubleArrow() {
//     return 'Archer casting arrows'
//   }
// }

// class Fighter extends Character {
//   constructor(name) {
//     super(name)
//     this.stamina = 100
//   }

//   slash() {
//     return 'Fighter slashing'
//   }
// }

// /* 
// what if I need a character that requires a method that can slash and can cast a spell? 
// I would need to duplicate the Fighter method slash and Mage method that can cast a spell 
// */

// class Paladin extends Character {
//   constructor(stamina, mana) {
//     super()
//     this.stamina = stamina
//     this.mana = mana
//   }

//   /* duplicate method from Mage */
//   castSpell() {
//     return 'Paladin casting spell'
//   }

//   /* duplicate method from Figher */
//   slash() {
//     return 'Paladin slashing'
//   }
// }

/* Composition */


const castSpell = (state) => ({
  cast: (spell) =>  {
    return `${state.name} casts a ${spell} | Remaining mana: ${state.mana -= 5}`
  }
})

const canFight = (state) => ({
  slash: () => {
    return `${state.name} slashing | Remaining stamina: ${state.stamina -= 5}`
  }
})

const doubleArrow = (state) => ({
  fireArrow: () => {
    return `${state.name} is casting arrows! | Remaining arrows: ${state.arrows -= 5}`
  }
})

const Archer = (name) => {
  let state = {
    name,
    health: 100,
    arrows: 50
  }

  return Object.assign(state, doubleArrow(state))
}

const Fighter = (name) => {
  let state = {
    name,
    health: 100,
    stamina: 100
  }

  return Object.assign(state, canFight(state))
}

const Mage = (name) => {
  let state = {
    name,
    health: 100,
    mana: 100
  }

  return Object.assign(state, castSpell(state))
}

const Paladin = (name) => {
  let state = {
    name,
    health: 100,
    stamina: 50,
    mana: 50
  }

  // you can just give the methods to this object directly without duplicating it and it's even more dynamic
  return Object.assign(state, canFight(state), castSpell(state))
}

const wizard = Mage('Merlin')
console.log(wizard)
console.log(wizard.cast('Fireball'))
console.log(wizard)

const godOfWar = Paladin('Cratus')
console.log(godOfWar)
console.log(godOfWar.slash())
console.log(godOfWar.cast('Freezing Ice'))
console.log(godOfWar)