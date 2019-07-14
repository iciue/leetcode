/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (39.71%)
 * Likes:    1185
 * Dislikes: 128
 * Total Accepted:    187.7K
 * Total Submissions: 471K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below.
 * 
 * For example, given the following triangle
 * 
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 * 
 * Note:
 * 
 * Bonus point if you are able to do this using only O(n) extra space, where n
 * is the total number of rows in the triangle.
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let depth = 0
  let start = 0
  let sum = triangle[0][0] + recur(start, triangle, depth)

  function recur(start, triangle, depth) {
    let currAry = triangle[depth]
    currAry.forEach((val, idx) => {
      let currAry[start] = recur(start, triangle, ++depth) + recur(start + 1, triangle, ++depth)
      // let currAry[start + 1]
    })
  }
};

minimumTotal([
  [1],
  [2, 3]
])