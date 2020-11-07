/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 *
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (25.51%)
 * Likes:    2872
 * Dislikes: 551
 * Total Accepted:    325.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement regular expression
 * matching with support for '.' and '*'.
 * 
 * 
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * 
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * 
 * 
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like . or *.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'.
 * Therefore, by repeating 'a' once, it becomes "aa".
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 * 
 * 
 * Example 4:
 * 
 * 
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore,
 * it matches "aab".
 * 
 * 
 * Example 5:
 * 
 * 
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p === '.*') return true
  const st = s.split('')
  const pattern = p.split('')
  return helper(st, pattern)
};

function helper(st, pattern) {
  while (pattern.length) {
    let sign = pattern[pattern.length - 1]
    let letter = st[st.length - 1]

    switch (sign) {
      case '.':
        if (letter === undefined) return false
        st.pop(), pattern.pop()
        break;

      case '*':
        const match = pattern.pop() && pattern.pop()
        if (helper(st.slice(), pattern.slice())) return true // 匹配 0 次

        // 循环条件为: 字符串长度不为 0  &&  (匹配模式为 . || 如果不是匹配 . 则字符串最后一个字符必须和匹配模式相等 )
        // 匹配0次以上
        while (st.length > 0 && (match === '.' || (st[st.length - 1] === letter && letter == match))) { 
          st.pop()
          if (helper(st.slice(), pattern.slice())) return true
        }

        return false
        break;

      default: // 如果 sign 不为 . 或 * 则其为 小写字母
        if (sign !== letter) return false
        st.pop(), pattern.pop()
        break;
    }
  }

  return st.length === 0 ? true : false
}



console.log(
  isMatch("aaa", "ab*a*c*a"), // true
  isMatch("aaa", "ab*ac*a"), // t
  isMatch("aa", ".*"), // t
  isMatch("ab", ".*"), // t
  isMatch("aa", "a*"), // t
  isMatch("aab", "c*a*b"), // t
  isMatch("aab", "ac*a*b"), // t
  isMatch("mississippi", "mis*is*ip*."), // t
  isMatch("abfac", "ab.*"), // t
  isMatch("ab", ".*..a*"), // t
  isMatch("aa", "a"), // f
  isMatch("aa", "aaaa"), // f
  isMatch("mississippi", "mis*is*p*."), //f
  isMatch("a", ".*..a*"), // f
  isMatch("aab", "b.*"), // f 
  isMatch("aaa", "ab*a") //f
);