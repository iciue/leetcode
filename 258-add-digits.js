/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if( num === 0 ) return 0  
  if( num % 9 === 0) return 9
  return num % 9
};

// 参考自: https://leetcode.com/problems/add-digits/discuss/68667/Simple-Java-Solution-No-recursion-loop