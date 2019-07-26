/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 *
 * https://leetcode.com/problems/valid-triangle-number/description/
 *
 * algorithms
 * Medium (45.41%)
 * Likes:    612
 * Dislikes: 75
 * Total Accepted:    39.7K
 * Total Submissions: 87.1K
 * Testcase Example:  '[2,2,3,4]'
 *
 * Given an array consists of non-negative integers,  your task is to count the
 * number of triplets chosen from the array that can make triangles if we take
 * them as side lengths of a triangle.
 * 
 * Example 1:
 * 
 * Input: [2,2,3,4]
 * Output: 3
 * Explanation:
 * Valid combinations are: 
 * 2,3,4 (using the first 2)
 * 2,3,4 (using the second 2)
 * 2,2,3
 * 
 * 
 * 
 * Note:
 * 
 * The length of the given array won't exceed 1000.
 * The integers in the given array are in the range of [0, 1000].
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let count = 0

  for (let i = 0, len = nums.length; i < len; i++) {
    let j = i + 1

    for (let k = i + 2; k < len; k++) {
      let sum = nums[i] + nums[j]
      if (sum < nums[k]) {
        count++
      } else {
        j++
      }
    }
  }
  return count
};