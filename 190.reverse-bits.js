/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let r = 0
  for (let i = 0; i < 32; i++) {
    if (n & 1 == 1) r += Math.pow(2, (31 - i))
    n = n >> 1
  }
  return r
};

console.log(
  reverseBits(43261596) //964176192
);