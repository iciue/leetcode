/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let bestSum = nums[0] + nums[1] + nums[2]
  nums = nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len; i++) {
    let second = i + 1
    let third = len - 1
    while (second < third) {
      sum = nums[i] + nums[second] + nums[third]
      if (sum > target) third -= 1
      if (sum < target) second += 1
      if (Math.abs(target - sum) < Math.abs(target - bestSum)) bestSum = sum
    }
  }
  return bestSum 
};

console.log(
  threeSumClosest1([-1, 2, 1, -4], -7)
);
// threeSumClosest([0, 1, 2], 3)