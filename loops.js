const obj = [{
  name: "Mario"
}, {
  name: "Luigi"
}, {
  name: "Yoshi"
}];

for (let item of obj.values()) {
  console.time('for of loop')
  console.log(item.name)
  console.timeEnd('for of loop')
}

Object.values(obj).map(item => {
  console.time('object.values + map')
  console.log(item.name)
  console.timeEnd('object.values + map')
})