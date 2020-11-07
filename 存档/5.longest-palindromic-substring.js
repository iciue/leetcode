/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (27.47%)
 * Likes:    3967
 * Dislikes: 375
 * Total Accepted:    606.5K
 * Total Submissions: 2.2M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  const len = s.length
  const dp = Array(len)
  for (let i = 0; i < len; i++) {
    dp[i] = Array(len).fill(0)
  }

  let maxLen = 0
  let start = 0
  let end = 0
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (i === j) dp[j][i] = 1
      if (i - j === 1 && s[i] === s[j]) dp[j][i] = 1
      if (i - j >= 2 && s[i] === s[j]) {
        dp[j][i] = dp[j + 1][i - 1]
      }
      if (dp[j][i] === 1 && i - j > maxLen) {
        maxLen = i - j
        start = j
        end = i
      }
    }
  }
  return s.slice(start, end + 1)
}

console.log(
  longestPalindrome("babad")
);

var longestPalindrome2 = function (s) {
  let start = 0
  let end = 0
  for (let i = 0, len = s.length; i < len - 1; i++) {
    let a = helper(s, i, i)
    let b = helper(s, i, i + 1)
    let max = Math.max(a, b)
    if (max > end - start) {
      start = i - ~~((max - 1) / 2)
      end = i + ~~(max / 2)
    }
  }
  return s.slice(start + 1, end)
};

function helper(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left + 1
}