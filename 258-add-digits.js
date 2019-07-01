/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // input: 1 ~ 9  output: 1~9
  // input: 10 ~ xx
  // output: 1 2 3 4 5 6 7 8 9(18)..1(19) 2(20) 3(21)...
  if (num < 10) return num
  return num % 9 === 0 ? 9 : num % 9
};

// 参考自: https://leetcode.com/problems/add-digits/discuss/68667/Simple-Java-Solution-No-recursion-loop