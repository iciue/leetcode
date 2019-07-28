/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 *
 * https://leetcode.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (40.03%)
 * Likes:    840
 * Dislikes: 102
 * Total Accepted:    84.3K
 * Total Submissions: 209.6K
 * Testcase Example:  '"abab"'
 *
 * Given a non-empty string check if it can be constructed by taking a
 * substring of it and appending multiple copies of the substring together. You
 * may assume the given string consists of lowercase English letters only and
 * its length will not exceed 10000.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abab"
 * Output: True
 * Explanation: It's the substring "ab" twice.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "aba"
 * Output: False
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "abcabcabcabc"
 * Output: True
 * Explanation: It's the substring "abc" four times. (And the substring
 * "abcabc" twice.)
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length <= 1) return false
  const len = s.length
  for (let i = 2; i <= len; i++) {
    let factor = len / i
    if (factor === ~~factor) { // f是可能的因数, 将字符串 f 等分, 判断是否相同
      let flag = true
      let st = s.slice(0, factor)
      for (let j = factor; j < len; j += factor) {
        if (st !== s.slice(j, j + factor)) flag = false
      }
      if (flag) return true
    }
  }
  return false
};


console.log(
  repeatedSubstringPattern("ababab"),
  repeatedSubstringPattern('aba')
);