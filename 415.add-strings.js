/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var addStrings1 = function (num1, num2) {
  let arr1 = num1.split('')
  let arr2 = num2.split('')
  let carry = 0
  let res = []
  while (arr1.length || arr2.length) {
    let a = arr1.pop() || 0
    let b = arr2.pop() || 0
    let s = (~~a) + (~~b) + carry
    res.push(s % 10)
    carry = ~~(s / 10)
  }
  if (carry !== 0) res.push(1)
  return res.reverse().join('')
};

console.log(
  addStrings('0', '0')
);