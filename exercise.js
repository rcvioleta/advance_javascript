// Date.prototype.lastYear = function () {
//   return this.getFullYear() - 1
// }

// console.log(new Date('1900-10-10').lastYear())

// Array.prototype.map = function () {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(this[i])
//   }
//   return result
// }

// console.log([1,2,3].map())

const obj = {
  name: 'new object',
  getName: function () {
     return () => {
       return this
     } 
  }
}

console.log(obj.getName()())