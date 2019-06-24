/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let r = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    r ^= nums[i]
  }
  return r
};


// a ^ a = 0
// a ^ 0 = a 