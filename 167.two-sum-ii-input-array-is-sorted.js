/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 *
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 *
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let s = 0
  let e = numbers.length - 1

  while (e > s) {
    let sum = numbers[s] + numbers[e]
    if (sum === target) return [s + 1, e + 1]
    if (sum > target) e--
    if (sum < target) s++
  }
};

console.log(
  // twoSum([2, 7, 11, 15], 9),
  // twoSum([2, 25, 75], 100)
  twoSum([3, 24, 50, 79, 88, 150, 345], 200)
);