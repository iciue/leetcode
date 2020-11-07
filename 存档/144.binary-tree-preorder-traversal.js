/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (51.69%)
 * Likes:    818
 * Dislikes: 41
 * Total Accepted:    352.9K
 * Total Submissions: 680.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * 
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * Output: [1,2,3]
 * 
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */

// iteratively
var preorderTraversal = function (root) {
  if (!root) return []
  let res = []
  let stack = [root]

  while (stack.length) {
    let root = stack.pop()
    res.push(root.val)
    if (root.right) stack.push(root.right)
    if (root.left) stack.push(root.left)
  }

  return res
}

// recursive 
var preorderTraversal = function (root, res = []) {
  if (!root) return res
  if (root) {
    res.push(root.val)
    preorderTraversal(root.left, res)
    preorderTraversal(root.right, res)
  }
  return res
};