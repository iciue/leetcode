/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 *
 * https://leetcode.com/problems/height-checker/description/
 *
 * algorithms
 * Easy (69.38%)
 * Likes:    53
 * Dislikes: 413
 * Total Accepted:    15.1K
 * Total Submissions: 21.8K
 * Testcase Example:  '[1,1,4,2,1,3]'
 *
 * Students are asked to stand in non-decreasing order of heights for an annual
 * photo.
 * 
 * Return the minimum number of students not standing in the right positions.
 * (This is the number of students that must move in order for all students to
 * be standing in non-decreasing order of height.)
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [1,1,4,2,1,3]
 * Output: 3
 * Explanation: 
 * Students with heights 4, 3 and the last 1 are not standing in the right
 * positions.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= heights.length <= 100
 * 1 <= heights[i] <= 100
 * 
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sorted = quickSort(heights.slice())
  let count = 0
  for (let i = 0, len = heights.length; i < len; i++) {
    if (heights[i] !== sorted[i]) count++
  }
  return count
};


function quickSort(ary, start = 0, end = ary.length - 1) {
  console.log(ary, start, end)
  if (end <= start) return ary
  let pivotIdx = ~~(Math.random() * (end - start) + start)
  let pivot = ary[pivotIdx]
  swap(ary, pivotIdx, end)
  let j = start - 1
  for (let i = start; i < end; i++) {
    if (ary[i] < pivot) swap(ary, ++j, i)
  }
  swap(ary, ++j, end)

  quickSort(ary, start, j)
  quickSort(ary, j + 1, end)

  return ary
}

function swap(arr, i, j) {
  let t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}