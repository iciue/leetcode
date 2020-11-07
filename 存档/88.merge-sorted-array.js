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

var merge = function (nums1, m, nums2, n) {
  let pos1 = m - 1 // 指向 nums1 的最右有效数
  let pos2 = n - 1 // 指向 nums2 的最右有效数
  let pos3 = m + n - 1 // 指向 nums1 的最右位

  while (pos1 >= 0 && pos2 >= 0) {
    if (nums1[pos1] < nums2[pos2]) {
      nums1[pos3--] = nums2[pos2--]
    } else {
      nums1[pos3--] = nums1[pos1--]
    }
  }

  while (pos2 >= 0) {
    nums1[pos3--] = nums2[pos2--]
  }

  return nums1
}

// 数组合并后冒泡排序
var merge2 = function (nums1, m, nums2, n) {
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
  // merge(
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0, [-50, -50, -48, -47, -44, -44, -37, -35, -35, -32, -32, -31, -29, -29, -28, -26, -24, -23, -23, -21, -20, -19, -17, -15, -14, -12, -12, -11, -10, -9, -8, -5, -2, -2, 1, 1, 3, 4, 4, 7, 7, 7, 9, 10, 11, 12, 14, 16, 17, 18, 21, 21, 24, 31, 33, 34, 35, 36, 41, 41, 46, 48, 48], 63),
  merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3),
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3),
  merge([2, 0], 1, [1], 1),
  merge([0, 0, 0], 0, [-3, -1, 2, 3], 3),
  merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6)
);