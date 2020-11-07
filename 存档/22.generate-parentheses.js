/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (56.04%)
 * Likes:    3035
 * Dislikes: 189
 * Total Accepted:    368.1K
 * Total Submissions: 656K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = []
  placeParenthesis(n, ret)
  return ret
};

function placeParenthesis (n, ret, stack = [], left = 0, right = 0) {
  if (stack.length === n * 2) {
    ret.push(stack.join(""))
  }
  if (left < n) {
    stack.push("(")
    placeParenthesis(n, ret, stack, left + 1, right)
  }
  if (right < right) { // 保证括号合法闭合, 有左括号的情况才能 push 右括号
    stack.push(")")
    placeParenthesis(n, ret, stack, left, right + 1)
  }
  stack.pop() // 回溯
}

// generateParenthesis(3)