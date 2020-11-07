/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums[0] <= nums[nums.length - 1]) return nums[0]
  let s = 0
  let e = nums.length - 1

  while (e - s !== 1) {
    let mid = ~~((s + e) / 2)
    // 大于头部则还在升区间
    if (nums[mid] > nums[s]) s = mid
    // 小于头部则还出于降区间
    if (nums[mid] < nums[s]) e = mid

  }
  return nums[e]
};

findMin([4, 5, 6, 7, 0, 1, 2])