/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 *
 * https://leetcode.com/problems/integer-to-roman/description/
 */
/**
 * @param {number} num
 * @return {string}
 */
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 999 > cmxcix
// 999 = 900 + 90 + 9 = 1000-100 + 100-10 + 10-1
var intToRoman = function (num) {
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let romans = ['M', "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let res = ''
  for (let i = 0, len = numbers.length; i < len; i++) {
    if (num >= numbers[i]) {
      num -= numbers[i]
      res += romans[i]
      i--
    }
  }
  console.log(num,res);
  for (let i = 0; i < num; i++) {
    res += "I"
  }
  return res
};

intToRoman(20)