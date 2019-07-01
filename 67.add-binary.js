/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let arr1 = a.split('')
  let arr2 = b.split('')
  let carry = 0
  let res = []

  while (arr1.length || arr2.length) {
    let d1 = 1 * arr1.pop() || 0
    let d2 = 1 * arr2.pop() || 0

    s = d1 + d2 + carry
    switch (s) {
      case 2:
        res.push(0)
        break;
      case 3:
        res.push(1)
        break;
      default:
        res.push(s)
    }

    s > 1 ? carry = 1 : carry = 0
  }
  if (carry !== 0) res.push(1)
  return res.reverse().join('')
};

console.log(
  addBinary("11", "111") 
);