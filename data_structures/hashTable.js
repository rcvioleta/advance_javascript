class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  hash(key) {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
      hashedKey += key.charCodeAt(i)
    }
    hashedKey = hashedKey % this.data.length
    return hashedKey
  }

  get(key) {
    const location = this.hash(key)
    return this.data[location]
  }

  set(key, value) {
    const location = this.hash(key)
    this.data[location] = value
    return this.data[location]
  }
}

const hash = new HashTable(20)
hash.set('grapes', 1000)
console.log(hash.get('grapes'))
hash