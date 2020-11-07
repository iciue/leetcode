/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (45.17%)
 * Likes:    3583
 * Dislikes: 459
 * Total Accepted:    408.6K
 * Total Submissions: 894.8K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * 
 * 
 * 
 * 
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49. 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let x = 0
  let y = height.length - 1
  let res = 0
  while (x < y) {
    let a = Math.min(height[x], height[y]) * (y - x)
    if (a > res) res = a
    if (height[x] < height[y]) {
      x++
    } else {
      y--
    }
  }
  return res
}

var maxArea = function (height) {
  let area = 0
  for (let i = 0, len = height.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let tmp = Math.min(height[i], height[j]) * (j - i)
      if (tmp > area) area = tmp
    }
  }
  return area
};
console.log(
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
);