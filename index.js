class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    let i = 0

    while (i < this.items.length) {
      if (this.items[i] > item) {
        break
      } else {
        i++
      }
    }

    this.items.splice(i, 0, item)
    this.length++
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) throw new Error("OutOfBounds")

    return this.items[pos]
  }

  max() {
    if (this.length == 0) throw new Error("EmptySortedList")

    return this.items[this.length - 1]
  }

  min() {
    if (this.length == 0) throw new Error("EmptySortedList")

    return this.items[0]
  }

  sum() {
    if (this.length == 0) return 0

    return this.items.reduce((sum, item) => {
      return sum + item
    })
  }

  avg() {
    if (this.length == 0) throw new Error("EmptySortedList")

    return this.items.reduce((avg, item) => {
      return avg + Math.floor(item / this.length)
    })
  }
}

module.exports = SortedList
