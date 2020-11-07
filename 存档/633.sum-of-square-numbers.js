/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 *
 * https://leetcode.com/problems/sum-of-square-numbers/description/
 *
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let b = Math.sqrt(c)
  if (~~b === b) return true
  let a = 0
  b = ~~b
  while (a <= b) {
    if (Math.pow(a, 2) + Math.pow(b, 2) === c) return true
    if (Math.pow(a, 2) + Math.pow(b, 2) > c) {
      b--
    } else {
      a++
    }
  }

  return false
};

console.log(
  judgeSquareSum(1000) //true
);