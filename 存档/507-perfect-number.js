/**
 * @param {number} num
 * @return {boolean}
 * the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
 */
var checkPerfectNumber = function (num) {
  if( num === 1) return false;
  let sqrt = Math.floor(Math.sqrt(num))
  let sum = 1

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) sum += i + num / i
  }
  
  return sum === num
};

checkPerfectNumber(1)