/**
 * Determine whether an integer is a palindrome. 
 * An integer is a palindrome when it reads the same backward as forward.
 * Example 1:
 * Input: 121
 * Output: true
 * Example 2:
 * Input: -121
 * Output: false
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindrome(x) {

  for (let i = 0, j = x.length - 1; i == j; i++, j--) {

  }
}

var isPalindrome = function (x) {
  if (x < 0 || 1 / x === -Infinity) return false;
  let n = x;
  let palindromeNum = 0
  let reminder;

  while (n > 0) {
    let reminder = n % 10;
    palindromeNum = palindromeNum * 10 + reminder;
    n = Math.floor(n / 10)
  }

  return palindromeNum === x ? true : false;
};