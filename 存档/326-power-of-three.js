/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let base3 = n.toString(3)
  let r = base3.split('').reduce((a, b) => a * 1 + b * 1, 0)
  return r === 1
};



console.log(isPowerOfThree(1));
// console.log(isPowerOfThree(43046722));