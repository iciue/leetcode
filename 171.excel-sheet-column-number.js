/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 *
 * https://leetcode.com/problems/excel-sheet-column-number/description/
 *
 */
/**
 * @param {string} s
 * @return {number}
 */

// A-Z    1 - 26  26进制的数字  26^0
// AA-AZ-ZZ  27 - 52 - 702 26^1
// AAA-AZZ  703 -  
var titleToNumber = function (s) {
  let list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let res = 0

  for (let i = 1, len = s.length; i <= len; i++) {
    let w = s[len - i]
    let n = list.indexOf(w) + 1
    res += n * Math.pow(26, i-1)
  }

  return res
};

console.log(
  titleToNumber('AZ')  
);