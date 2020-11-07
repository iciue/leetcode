/**
 * @param {number} x
 * @return {number}
 */


// 二分
var mySqrt = function (n) {
  let s = 1
  let e = n

  while (e - s > 1) {
    let mid = ~~((s + e) / 2)
    let temp = mid * mid
    if (temp === e) return mid
    if (temp > e) e = mid
    if (temp < e) s = mid
  }
  return s
}
// Newton's method
var mySqrt = function (n) {
  let x = 2
  for (let i = 0; i < 20; i++) {
    x = x - (x * x - n) / (2 * x)
  }
  return Math.floor(x)
};


console.log(
  mySqrt(2147483647)
);