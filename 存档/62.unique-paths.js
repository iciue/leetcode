/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 *
 * https://leetcode.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (48.00%)
 * Likes:    1664
 * Dislikes: 116
 * Total Accepted:    300.1K
 * Total Submissions: 624.8K
 * Testcase Example:  '3\n2'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * How many possible unique paths are there?
 * 
 * 
 * Above is a 7 x 3 grid. How many possible unique paths are there?
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the
 * bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: m = 7, n = 3
 * Output: 28
 * 
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let caches = {}

  function move(m, n) {
    if (m <= 0 || n <= 0) return 0
    if (m === 1 && n === 1) return 1
    if (caches[[m, n]] > 0) return caches[[m, n]]

    let topPaths = move(m, n - 1)
    let leftPaths = move(m - 1, n)
    return caches[[m, n]] = topPaths + leftPaths
  }

  caches[[m, n]] = move(m, n)
  return caches[[m, n]]
};

console.log(
  uniquePaths(2, 2),
  uniquePaths(7, 3)
);