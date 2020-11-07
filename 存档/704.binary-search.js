/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 *
 * https://leetcode.com/problems/binary-search/description/
 *
 *
 * Given a sorted (in ascending order) integer array nums of n elements and a
 * target value, write a function to search target in nums. If target exists,
 * then return its index, otherwise return -1.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let head = 0
  let tail = nums.length - 1
  let mid = 0

  while (head <= tail) {
    mid = ~~((head + tail) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] > target) tail = mid - 1
    if (nums[mid] < target) head = mid + 1
  }

  return -1
};

console.log(
  search([2, 5], 5),
  search([-1, 0, 3, 5, 9, 12], 2)
);