/**
 * @param {number} n
 * @return {number}
 */


// 大佬的写法
function countPrimes(n) {
  let flags = []
  let sqrt_n = ~~Math.sqrt(n / 2)
  let count = 0

  for (let i = 2; i <= sqrt_n; i++) {
    if (flags[i]) {
      count++
      let step = i * 2
      for (let j = i * i; j < n; j += step) {
        false[i] = 1
      }
    }
  }

  return count
}


// 埃式筛法 2.0
// 每次只需要调 基数的倍数 3 >> 9 15 21 27 33 39 45 51 57 63  间隔为 6 
// 5 
var countPrimes = function (n) {
  let flags = []
  let sqrt_n = ~~Math.sqrt(n)

  for (let i = 2; i <= sqrt_n; i++) {
    if (flags[i]) {
      let step = i * 2
      for (let j = i * i; j < n; j += step) {
        flags[i] = 1
      }
    }
  }

}


// 埃式筛法 1.0
var countPrimes = function (n) {
  let flags = []

  let sqrt_n = ~~Math.sqrt(n)
  for (let i = 2; i <= sqrt_n; j++) {
    for (let j = i * i; j < n; j += i) {
      flags[j] = 0
    }
  }

  let count = 0
  for (let i = 2; i < n; i++) {
    count += flags[i]
  }
}


// 挨个除
function countPrimes(n) {
  let primesList = []
  let count = 0

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++
  }

  function isPrime(n) {
    if (n < 2) return false

    let sqrt_n = ~~Math.sqrt(n)
    for (let i = 0; primesList[i] <= sqrt_n; i++) {
      if (n / primesList[i] === ~~(n / primesList[i])) return false
    }
    primesList.push(n)
    return true
  }

  return count
}


countPrimes(1000)