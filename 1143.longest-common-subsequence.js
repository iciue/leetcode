/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 *
 * https://leetcode.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (59.31%)
 * Likes:    56
 * Dislikes: 4
 * Total Accepted:    1.7K
 * Total Submissions: 2.9K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * Given two strings text1 and text2, return the length of their longest common
 * subsequence.
 * 
 * A subsequence of a string is a new string generated from the original string
 * with some characters(can be none) deleted without changing the relative
 * order of the remaining characters. (eg, "ace" is a subsequence of "abcde"
 * while "aec" is not). A common subsequence of two strings is a subsequence
 * that is common to both strings.
 * 
 * If there is no common subsequence, return 0.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: text1 = "abcde", text2 = "ace" 
 * Output: 3  
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= text1.length <= 1000
 * 1 <= text2.length <= 1000
 * The input strings consist of lowercase English characters only.
 * 
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// 😯大佬的写法....
var longestCommonSubsequence = function (s1, s2) {
  let prev = Array(s2.length + 1).fill(0)
  let curr = Array(s2.length + 1).fill(0)

  for (let i = 0, len1 = s1.length; i < len1; i++) {
    for (let j = 0, len2 = s2.length; j < len2; j++) {
      if (s1[i] === s2[j]) {
        curr[j + 1] = 1 + prev[j] // 如果相同则取 上一个最长长度 + 1
      } else {
        // 如果不相同即将当前位置的值赋值为当前最长子串长度, 这样不用每次的查询前 n 个数, 只需要第 n 个数
        curr[j + 1] = Math.max(curr[j], prev[j + 1]) 
      }
    }
    [prev, curr] = [curr, prev]
  }

  return Math.max(...prev)
}



// 优化第一种写法
var longestCommonSubsequence2 = function (s1, s2) {
  let prev = Array(s2.length + 1).fill(0)
  let curr = Array(s2.length + 1).fill(0)

  for (let i = 0, len1 = s1.length; i < len1; i++) {
    for (let j = 0, len2 = s2.length; j < len2; j++) {
      if (s1[i] === s2[j]) {
        curr[j + 1] = 1 + Math.max(...prev.slice(0, j + 1))
      } else {
        curr[j + 1] = prev[j + 1]
      }
    }
    [prev, curr] = [curr, prev]
  }

  return Math.max(...prev)
}

var longestCommonSubsequence1 = function (text1, text2) {
  const dp = Array(2).fill(0).map(it => Array(text2.length + 1).fill(0))

  for (let i = 0, len1 = text1.length; i < len1; i++) {
    let flag = false // 默认 text1[i] 与 text2 没有匹配值
    for (let j = 0, len2 = text2.length; j < len2; j++) {
      if (text1[i] === text2[j]) {
        dp[1][j + 1] = 1 + Math.max(...dp[0].slice(0, j + 1))
        flag = true
      }
    }
    if (flag) { // 滚动二维数组
      dp[0] = dp[0].map((val, idx) => val ? Math.max(val, dp[1][idx]) : dp[1][idx])
      dp[1] = Array(text2.length + 1).fill(0)
    }
  }
  return Math.max(...dp[0])
};

console.log(
  longestCommonSubsequence("ezupkre", "ubmreapg")
);