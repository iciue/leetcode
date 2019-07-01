/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 *
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let sorted = nums.sort((a, b) => a - b)
  let mid = sorted[~~(sorted.length / 2)]
  let res = 0
  for (let i = 0, len = sorted.length; i < len; i++) {
    res += Math.abs(mid - sorted[i])
  }
  return res
};

console.log(
  minMoves2([1, 4, 6, 8, 2])
);