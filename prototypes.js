function Square() {

}

Square.prototype.getRadius = function() {
  return 'get radius'
}

function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Object.prototype)
Circle.prototype = Object.create(Square.prototype)

Circle.prototype.draw = function() {
  return 'draw'
}

const s = new Square()
const c = new Circle(30)

console.log(c.getRadius())
console.log(s)


// class Square {
//   duplicate() {
//     return 'duplicate'
//   }
// }

// class Circle extends Square {
//   constructor(radius) {
//     super()
//     this.radius = radius
//   }

//   draw() {
//     return 'draw'
//   }

//   duplicate() {
//     return 'I managed to overwrite the parent method'
//   }
// }

// const circle = new Circle(5)
// console.log(circle.duplicate())