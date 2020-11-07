/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (53.04%)
 * Likes:    1779
 * Dislikes: 151
 * Total Accepted:    403.2K
 * Total Submissions: 757.1K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 投票算法
var majorityElement = function(nums) {
  let count = 0
  let majority = 0
  for (let i = 0, len = nums.length; i < len; i++) {
    if (count === 0) {
      majority = nums[i]
      count++
    } else if (majority === nums[i]){
      count++
    } else {
      count--
    }
  }
  return majority
};

majorityElement([3,3,4])

