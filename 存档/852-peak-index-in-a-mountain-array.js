/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  let max = 0
  for (let i = 0, len = A.length; i < len; i++) {
    if (A[i] >= max) {
      max = A[i]
    } else {
      return i - 1
    }
  }
};