/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (42.13%)
 * Likes:    1039
 * Dislikes: 61
 * Total Accepted:    231.3K
 * Total Submissions: 546.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its zigzag level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let res = []
  let stack = [root]
  let depth = 1

  while (stack.length) {
    let currLevel = []
    stack = stack.reduce((nextLevel, root) => {
      currLevel.push(root.val)
      if (root.left && root.right) {
        nextLevel.push(root.left)
        nextLevel.push(root.right)
      } else {
        if (root.left) nextLevel.push(root.left)
        if (root.right) nextLevel.push(root.right)
      }
      return nextLevel
    }, [])

    if (depth++ % 2 === 0) currLevel.reverse()
    res.push(currLevel)
  }

  return res
};