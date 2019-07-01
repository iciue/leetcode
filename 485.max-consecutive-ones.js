/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 *
 * https://leetcode.com/problems/max-consecutive-ones/description/
 *
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let currMax = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 1) currMax += 1
    if (nums[i] === 0) currMax = 0
    if (currMax > max) max = currMax
  }
  return max
};