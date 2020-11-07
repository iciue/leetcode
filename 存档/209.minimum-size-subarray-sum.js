/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let sum = 0
  let j = 0
  let count = nums.length
  for (let i = 0, len = nums.length; i < len; i++) {
    sum += nums[i]
    while (sum >= s) {
      count = (i - j + 1) < count ? i - j + 1 : count
      sum -= nums[j]
      j++
    }
  }
  if (j === 0 && sum < s) return 0
  return count
};

console.log(
  minSubArrayLen(15, [1, 2, 3, 4, 5]), //3
  minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), // 2
  minSubArrayLen(4, [1, 4, 4]) // 1
);