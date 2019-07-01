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
  let sum = -Infinity
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count += nums[i]
    console.log(count);
    if (count < nums[i]) {
      count = nums[i]
    }
    console.log(count);
    sum = count > sum ? count : sum
  }
  return sum
};

console.log(
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])

);