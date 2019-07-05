/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let largestSum = nums[0]
  let currSum = nums[0]

  for (let i = 1, len = nums.length; i < len; i++) {
    currSum += nums[i]
    if (currSum < nums[i]) {
      currSum = nums[i]
    }
    largestSum = currSum > largestSum ? currSum : largestSum
  }

  return largestSum
};

console.log(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);