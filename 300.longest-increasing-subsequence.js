/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 *
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (40.99%)
 * Likes:    2706
 * Dislikes: 62
 * Total Accepted:    238.5K
 * Total Submissions: 580.2K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * Given an unsorted array of integers, find the length of longest increasing
 * subsequence.
 * 
 * Example:
 * 
 * 
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4 
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore
 * the length is 4. 
 * 
 * Note: 
 * 
 * 
 * There may be more than one LIS combination, it is only necessary for you to
 * return the length.
 * Your algorithm should run in O(n^2) complexity.
 * 
 * 
 * Follow up: Could you improve it to O(n log n) time complexity?
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0
  const len = nums.length
  const dp = Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = (dp[j] + 1) > dp[i] ? (dp[j] + 1) : dp[i]
      }
    }
  }
  return Math.max(...dp)
};

lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])