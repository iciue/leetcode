/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  let sum1 = 0
  let sum2 = 0
  let nums2 = Array.from(new Set(nums))

  for (let i = 0, len = nums.length; i < len; i++) {
    sum1 += nums[i]
  }

  for (let i = 0, len = nums2.length; i < len; i++) {
    sum2 += nums2[i]
  }

  return (3 * sum2 - sum1) / 2
};


console.log(
  singleNumber([1, 1, 1, 3])
);