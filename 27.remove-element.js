/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 *
 * https://leetcode.com/problems/remove-element/description/
 *
 * algorithms
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length
  let j = 0
  for (let i = 0; i < len; i++) {
    if(nums[i] !== val) {
      nums[j] = nums[i]
      j++
    }
  }
  return nums
  return j
};

console.log(
  removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) // [0,1,4,0,3,2,2,2]
);