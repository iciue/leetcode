/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (48.34%)
 * Likes:    2170
 * Dislikes: 178
 * Total Accepted:    397.6K
 * Total Submissions: 817.4K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */



var findKthLargest = function (nums, k) {
  let sorted = quickSort(nums)
  return sorted[sorted.length - k]
};

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end - start <= 0) return arr
  let pivotIdx = ~~(Math.random() * (end - start) + start)
  let pivot = arr[pivotIdx]
  swap(arr, pivotIdx, end)

  let j = start - 1
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) swap(arr, i, ++j)
  }

  swap(arr, ++j, end)

  quickSort(arr, start, j)
  quickSort(arr, j + 1, end)

  return arr
}

function swap(arr, i, j) {
  if (i === j) return
  let t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

let arr = new Array(100).fill(1).map(it => ~~(Math.random() * 100))
console.log(
  quickSort(arr)
);