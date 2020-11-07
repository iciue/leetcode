/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 *
 * https://leetcode.com/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (63.62%)
 * Likes:    76
 * Dislikes: 97
 * Total Accepted:    14.2K
 * Total Submissions: 22.4K
 * Testcase Example:  '[5,2,3,1]'
 *
 * Given an array of integers nums, sort the array in ascending order.
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [5,2,3,1]
 * Output: [1,2,3,5]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= A.length <= 10000
 * -50000 <= A[i] <= 50000
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    let sorted = false
    for (let j = 0; j < i; j--) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
        sorted = true
      }
    }
    if (!sorted) break
  }
  return nums
};

function swap(arr, i, j) {
  let t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}