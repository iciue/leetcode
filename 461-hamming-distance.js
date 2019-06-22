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


hammingDistance(1, 4)
