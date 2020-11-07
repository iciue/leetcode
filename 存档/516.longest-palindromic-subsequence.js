/*
 * @lc app=leetcode id=516 lang=javascript
 *
 * [516] Longest Palindromic Subsequence
 *
 * https://leetcode.com/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (47.09%)
 * Likes:    945
 * Dislikes: 132
 * Total Accepted:    64.7K
 * Total Submissions: 136.6K
 * Testcase Example:  '"bbbab"'
 *
 * 
 * Given a string s, find the longest palindromic subsequence's length in s.
 * You may assume that the maximum length of s is 1000.
 * 
 * 
 * Example 1:
 * Input: 
 * 
 * "bbbab"
 * 
 * Output: 
 * 
 * 4
 * 
 * One possible longest palindromic subsequence is "bbbb".
 * 
 * 
 * Example 2:
 * Input:
 * 
 * "cbbd"
 * 
 * Output:
 * 
 * 2
 * 
 * One possible longest palindromic subsequence is "bb".
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  let end = s.length - 1
  let cache = []
  helper(s, 0, end)
  return cache[0][end]

  function helper(s, start, end) {
    if (cache[start] === undefined) cache[start] = []

    if (start > end) {
      cache[start][end] = 0
      return 0
    }
    if (start === end) {
      cache[start][end] = 1
      return 1
    }

    if (cache[start][end] === undefined) {
      if (s[start] === s[end]) {
        cache[start][end] = helper(s, start + 1, end - 1) + 2
      } else {
        cache[start][end] = Math.max(helper(s, start + 1, end), helper(s, start, end - 1))
      }
    }
    return cache[start][end]
  }
};

console.log(
  longestPalindromeSubseq("bbbab")
);