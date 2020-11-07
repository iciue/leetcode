/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let c = 0
  while (n !== 0) {
    if (n & 1 === 1) c++
    n = n >>> 1
  }
  return c
};

console.log(
  hammingWeight(-3) //964176192
);