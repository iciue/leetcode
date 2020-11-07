/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 */
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs2 = function (n) {
  let prev = 1
  let curr = 1
  let tmp = 0
  for (let i = 1; i < n; i++) {
    tmp = curr
    curr = prev + curr
    prev = tmp
  }
  return curr
}
climbStairs2(10)

// 超时...
var climbStairs = function (n) {
  return n < 3 ? 3 : climbStairs(n - 2) + climbStairs(n - 1)
}

// 递归, 超时
var climbStairs = function (n) {
  let c = 0
  let curr = 0
  climbTop(curr)

  function climbTop(curr) {
    if (curr === n) {
      c++
    }
    if (curr < n) {
      climbTop(curr + 2)
      climbTop(curr + 1)
    }
  }
  return c
};
console.log(
  // climbStairs(40)
);