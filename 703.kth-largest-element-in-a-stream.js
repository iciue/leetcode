class PriorityQueue {
  constructor(init = []) {
    this.data = init.slice()
    this.heapify()
  }
  heapify() {
    let startIdx = (this.size - 2) >> 1
    for (let i = startIdx; i >= 0; i--) {
      this.heapDown(i)
    }
  }

  pop() {
    this.swap(0, this.size - 1)
    const result = this.data.pop()
    this.heapDown(0)
    return result
  }

  plus(val) {
    this.data.push(val)
    this.heapUp(this.size - 1)
  }

  heapUp(idx) {
    if (idx > 0) {
      let pIdx = (idx - 1) >> 1
      if (this.data[idx] < this.data[pIdx]) {
        this.swap(idx, pIdx)
        this.heapUp(pIdx)
      }
    }
  }

  heapDown(idx) {
    if (idx < this.size) {
      let maxIdx = idx
      let lIdx = maxIdx * 2 + 1
      let rIdx = lIdx + 1
      if (lIdx < this.size && this.data[lIdx] < this.data[maxIdx]) maxIdx = lIdx
      if (rIdx < this.size && this.data[rIdx] < this.data[maxIdx]) maxIdx = rIdx
      if (idx !== maxIdx) {
        this.swap(idx, maxIdx)
        this.heapDown(maxIdx)
      }
    }
  }

  swap(i, j, arr = this.data) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }


  get size() {
    return this.data.length
  }
}

class KthLargest extends PriorityQueue {
  constructor(k, nums) {
    super(nums)
    this.init(k)
    this.k = k
  }
  add(val) {
    if (this.minimum === undefined || this.size < this.k) {
      this.plus(val)
      return this.minimum
    }
    if (val >= this.data[0]) {
      this.pop()
      this.plus(val)
      return this.minimum
    }
    return this.minimum
  }

  init(k) {
    const times = this.size - k
    for (let i = 0; i < times; i++) {
      this.pop()
    }
  }

  get minimum() {
    return this.data[0]
  }
}