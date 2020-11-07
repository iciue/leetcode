/**
 * @param {number} x
 * @return {number}
 * 
 * Note: Assume we are dealing with an environment which could only store integers within the 32-bit 
 * signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function 
 * returns 0 when the reversed integer overflows
 */
var reverse = function (x) {
  let negative = (x >= 0) ? true : false;
  let min = (2 ** 31) * (-1)
  let max = 2 ** 31 - 1
  let result = 0;
  let reminder;

  if (x <= 0) {
    x = x * (-1)
  }

  while (x !== 0) {
    reminder = x % 10
    result = result * 10 + reminder
    x = Math.floor(x / 10)
  }
  console.log(result);
  if (result >= min && result <= max) {
    return negative ? result : result * (-1)
  }
  return 0
};

reverse(123)