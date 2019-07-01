/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 数组合并后冒泡排序
var merge = function (nums1, m, nums2, n) {
  let n1Len = nums1.length
  let len = m + n
  nums1.splice(m, n1Len, ...nums2)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums1[j] > nums1[j + 1]) {
        nums1[j] ^= nums1[j + 1]
        nums1[j + 1] ^= nums1[j]
        nums1[j] ^= nums1[j + 1]
      }
    }
  }
  return nums1
}

console.log(
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);