/**
 * @param {number} x
 * @return {number}
 */

// Newton's method
var mySqrt = function(n) {
  let x = 2
  for(let i = 0; i < 20; i++) {
      x = x - (x * x - n) / ( 2 * x)
  }
  return Math.floor(x)
};