const _length = new WeakMap()
const _array = new WeakMap()
const _shiftItems = new WeakMap()

class MyArray {
  constructor() {
    _length.set(this, 0)
    _array.set(this, {})

    _shiftItems.set(this, (index) => {
      for (let i = index; i < this.count - 1; i++) {
        this.arrayData[i] = this.arrayData[i + 1]
      }
      this.count--
      delete this.arrayData[this.count]
    })
  }

  get count() {
    return _length.get(this)
  }

  set count(newCount) {
    _length.set(this, newCount)
    return this.count
  }

  get list() {
    return _array.get(this)
  }

  get index() {
    return this.count
  }

  get arrayData() {
    return _array.get(this)
  }

  insert(item) {
    this.arrayData[this.index] = item
    this.count++
  }

  get(index) {
    return this.arrayData[index]
  }

  remove(index) {
    _shiftItems.get(this)(index)
    return index
  }
}


const newArray = new MyArray()
newArray.insert('banana')
newArray.insert('apple')
newArray.remove(0)
newArray.insert('mango')
newArray.insert('durian')
newArray.remove(0)
newArray.insert('pineapple')
console.log(newArray.count)
console.log(newArray.list)