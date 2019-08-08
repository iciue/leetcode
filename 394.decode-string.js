/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 *
 * https://leetcode.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (45.70%)
 * Likes:    1680
 * Dislikes: 93
 * Total Accepted:    117.3K
 * Total Submissions: 256.5K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * Given an encoded string, return its decoded string.
 * 
 * The encoding rule is: k[encoded_string], where the encoded_string inside the
 * square brackets is being repeated exactly k times. Note that k is guaranteed
 * to be a positive integer.
 * 
 * You may assume that the input string is always valid; No extra white spaces,
 * square brackets are well-formed, etc.
 * 
 * Furthermore, you may assume that the original data does not contain any
 * digits and that digits are only for those repeat numbers, k. For example,
 * there won't be input like 3a or 2[4].
 * 
 * Examples:
 * 
 * 
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 * 
 * 
 * 
 * sss
 */
/**
 * @param {string} s
 * @return {string}
 */

// 栈
var decodeString = function (s) {
  let stackNum = []
  let stackStr = []
  let cur = 0
  let result = ''

  while (cur < s.length) {
    if (/\d/.test(s[cur])) {
      let num = ""
      while (/\d/.test(s[cur])) {
        num += s[cur++]
      }
      stackNum.push(num * 1)
    }

    if (s[cur] === '[') {
      stackStr.push(result)
      result = ""
      cur++
    }

    if (s[cur] === ']') {
      let count = stackNum.pop()
      result = stackStr.pop() + result.repeat(count || 1)
      cur++
    }

    if (/^[a-z]$/i.test(s[cur])) result += s[cur++]
  }

  return result
};


// 递归
var decodeString1 = function (s, ret = "") {
  if (s.length === 1) return s
  let count = ""
  let i = 0
  while (i < s.length) {

    if (/[a-z]/m.test(s[i])) {
      ret = ret + s[i++]
      continue
    }

    if (/\d/.test(s[i])) {
      count += s[i++]
      continue
    }

    if (/\[/.test(s[i])) {
      let parentheses = 0
      let str = ""
      do {
        if (/\[/.test(s[i])) parentheses++
        if (/\]/.test(s[i])) parentheses--
        str += s[i++]
      } while (parentheses !== 0);
      let needRepeat = decodeString(str.slice(1, str.length - 1))
      ret += needRepeat.repeat(count * 1 || 1)
      count = 1
    }
  }

  return ret
};

console.log(
  decodeString("2[a]")
)