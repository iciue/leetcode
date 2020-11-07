/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (33.74%)
 * Likes:    1757
 * Dislikes: 91
 * Total Accepted:    322.3K
 * Total Submissions: 952K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (33.74%)
 * Likes:    1757
 * Dislikes: 91
 * Total Accepted:    322.3K
 * Total Submissions: 952K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let startIdx = findTargetStart(nums, target)
  if (startIdx === -1) return [-1, -1]
  let endIdx = findTargetEnd(nums, target)

  return [startIdx, endIdx]
};

function findTargetStart(arr, k) {
  let left = 0
  let right = arr.length - 1
  let mid = null
  let result = -1

  while (left <= right) {
    mid = ~~(left + (right - left) / 2)
    if (arr[mid] > k) {
      right = mid - 1
    }
    if (arr[mid] < k) {
      left = mid + 1
    }
    if (arr[mid] === k) {
      result = mid
      right = mid - 1
    }
  }
  return result
}

function findTargetEnd(arr, k) {
  let left = 0
  let right = arr.length - 1
  let mid = null
  let result = -1

  while (left <= right) {
    mid = ~~(left + (right - left) / 2)
    if (arr[mid] > k) {
      right = mid - 1;
    }
    if (arr[mid] < k) {
      left = mid + 1
    }
    if (arr[mid] === k) {
      result = mid
      left = mid + 1
    }
  }
  return result
}