/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let squre = mySqrt(num)
  return squre - Math.floor(squre) === 0
};
// 牛顿法求平方根
function mySqrt(n) {
  let x = 2;
  for (let i = 0; i < 20; i++) {
    x = x - (x * x - n) / (2 * x)
  }
  return x
}

// 二分查找
function isPerfectSquare2(n) {
  let s = 1
  let e = n
  while (s <= e) {
    let mid = Math.floor((s + e) / 2)
    let temp = mid * mid

    if (temp === n) return true
    if (temp > n) e = mid - 1
    if (temp < n) s = mid + 1
  }
  
  return false
}

isPerfectSquare2(5)