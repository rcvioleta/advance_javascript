const array = [1, 2, 3, 4]

for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log(`I am at index ${array[i]}`)
  }, 3000)
}