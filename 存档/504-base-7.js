/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return '0'
  let s = ""
  let isNegative = num > 0
  num = Math.abs(num)
  while (num != 0) {
    s = (num % 7) + s
    num = Math.floor(num / 7)
  }

  return isNegative ? s : `-${s}`
};


convertToBase7(-202)