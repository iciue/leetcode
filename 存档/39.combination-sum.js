/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (49.72%)
 * Likes:    2228
 * Dislikes: 69
 * Total Accepted:    371.2K
 * Total Submissions: 745.6K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  return helper(candidates.sort((a, b) => a - b), target)
};


function helper(candidates, target, ret = [], solve = [], startIdx = 0) {
  if (target === 0) {
    ret.push(solve.slice())
    return
  }
  for (let i = startIdx, len = candidates.length; i < len; i++) {
    if (target >= candidates[i]) {
      solve.push(candidates[i])
      helper(candidates, target - candidates[i], ret, solve, i)
      solve.pop()
    }
  }

  return ret
}

console.log(
  combinationSum([3, 2, 6, 7], 11)
  // canPush([[3,2,6]], [2,2,7])
);