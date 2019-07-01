/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let res = ""
  let test = []
  while (n > 0) {
    n = n - 1
    let i = (n % 26)
    res = list[i] + res
    n = ~~(n / 26)
  }
  return res
};

console.log(
  convertToTitle(27) // AA
);