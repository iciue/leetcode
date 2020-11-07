/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 *
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
 *
 */

/*
 * @param {number[]} nums
 * @return {number}
 */

// (n-1)*m + sum0 = sum1 = t * n
// (n-1)*m + sum0 = t * n
// m = sum0 - minimum * n
var minMoves2 = function (nums) {
  let minimum = nums[0]
  let sum = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if(nums[i] < minimum) minimum = nums[i] 
    sum += nums[i]
  }
  return sum - minimum * len
}

// 将 n-1 个元素 + 1, 等同于第个元素 -1
var minMoves = function (nums) {
  let sorted = nums.sort((a, b) => a - b)
  let minimum = sorted[0]
  let sum = 0

  for (let i = 1, len = sorted.length; i < len; i++) {
    sum += sorted[i] - minimum
  }

  return sum
};

console.log(minMoves2([1, 2, 3])); // 3