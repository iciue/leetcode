/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (num) {
  let count = 0
  let sum = getDigitSquareSum(num)

  while (count < 2) {
    if (sum === 1) break
    if (sum == 4) count += 1
    if (sum !== 1) sum = getDigitSquareSum(sum)
  }

  return sum === 1

};

function getDigitSquareSum(n) {
  let sum = 0
  while (n > 0) {
    let digit = n % 10
    sum += Math.pow(digit, 2)
    n = (n - digit) / 10
  }
  return sum
}


isHappy(19)