/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 *
 * https://leetcode.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (35.44%)
 * Likes:    957
 * Dislikes: 33
 * Total Accepted:    122.8K
 * Total Submissions: 346.4K
 * Testcase Example:  '[2,3,2]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed. All houses at this place are
 * arranged in a circle. That means the first house is the neighbor of the last
 * one. Meanwhile, adjacent houses have security system connected and it will
 * automatically contact the police if two adjacent houses were broken into on
 * the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money
 * = 2),
 * because they are adjacent houses.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length

  const dp0 = Array(len + 3).fill(0) // dp0 = nums[i: len - 2]
  const dp1 = Array(len + 3).fill(0) // do1 = nums[i: len - 1]

  for (let i = len - 1; i >= 0; i--) {
    dp0[i] = nums[i - 1] + Math.max(dp0[i + 2], dp0[i + 3])
    dp1[i] = nums[i] + Math.max(dp1[i + 2], dp1[i + 3])
  }

  return Math.max(dp0[0], dp1[1])
};