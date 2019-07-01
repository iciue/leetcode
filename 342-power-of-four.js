/**
 * @param {number} num
 * @return {boolean}
 */

// 将数字转换为 4 进制, 则其二进制永远是 1(4**0) 100(4**1) 1000(4**2)
var isPowerOfFour = function (num) {
  let base4 = num.toString(4)
  return base4 / Math.pow(10, base4.length - 1) === 1
};

var isPowerOfFour = function (n) {

  return ((n & (n - 1)))
};

console.log(isPowerOfFour(127));