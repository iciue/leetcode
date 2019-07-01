/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let c = 0
  while (x !== 0 || y !== 0) {
    let a = x % 2
    let b = y % 2
    if (a !== b) c++
    x = Math.floor(x / 2)
    y = Math.floor(y / 2)
  }
  return c
};

var hammingDistance2 = function (x, y) {
  let res = x ^ y // 0001 ^ 0100 = 0101 
  let c = 0
  // 取末尾, 判断是否为 1, 为 1 则计数器+1
  while (res !== 0) {
    if (res & 1 === 1) c++
    res = res >> 1
  }
  return c
}

hammingDistance(1, 4)



// n & (n-1)