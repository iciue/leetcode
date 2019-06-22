/**
 * @param {number} num
 * @return {boolean}
 */

var isUgly = function (num) {
  if (num <= 0) return false
  if (num === 1) return true

  while (parseInt(num / 2) === num / 2) {
    num = num / 2
  }

  while (parseInt(num / 3) === num / 3) {
    num = num / 3
  }

  while (parseInt(num / 5) === num / 5) {
    num = num / 5
  }

  return num === 1 ? true : false
}


var isUgly2 = function (num) {
  if (num === 1) return true
  if (num < 0) return false
  let factors = [2, 3, 5]
  let r = false

  for (let i = 0, len = factors.length; i < len; i++) {
    if (num % factors[i] === 0) {
      let f2 = num / factors[i]
      if (factors.includes(f2)) {
        r = true
      } else {
        r = isUgly(f2)
      }
    }
  }
  return r
}



console.log(isUgly(8));