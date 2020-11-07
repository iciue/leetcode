/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (48.96%)
 * Likes:    1570
 * Dislikes: 43
 * Total Accepted:    396.7K
 * Total Submissions: 807.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
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
 * return its level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
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
var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let stack = [root]

  while (stack.length) {
    let currLevelVal = []
    stack = stack.reduce((nextLevel, root) => {
      currLevelVal.push(root.val)
      if (root.left && root.right) {
        nextLevel.push(root.left)
        nextLevel.push(root.right)
      } else {
        if (root.right) nextLevel.push(root.right)
        if (root.left) nextLevel.push(root.left)
      }
      return nextLevel
    }, [])
    res.push(currLevelVal)
  }

  return res
};