/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let pos = 0
  for (let i = 0, len = nums.length; i < len; i++) {
  if (nums[pos] === 0 && nums[i] !== 0) {
      nums[pos] ^= nums[i]
      nums[i] ^= nums[pos]
      nums[pos] ^= nums[i]
      pos++
    }
    if (nums[pos] !== 0) pos++

  }
  return nums
}

console.log(
  moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0])
);

// 0 1 0 3 12  >> 1 3 12 0 0

var moveZeroes = function (nums) {
  let nextZeroPos = 0

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) nums[nextZeroPos++] = nums[i]
  }

  for (; nextZeroPos < nums.length; nextZeroPos) {
    nums[nextZeroPos++] = 0
  }

};