/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 *
 * https://leetcode.com/problems/missing-number/description/
 *
 * algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function (nums) {
  let n = nums.length
  let sum = (1 + n) * n / 2
  let sum2 = 0
  for(let i = 0; i < n; i++) {
    sum2 += nums[i]
  }
  return sum - sum2
};

console.log(
  missingNumber([1, 3, 0, 4])
);