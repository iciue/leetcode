/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (57.14%)
 * Likes:    1735
 * Dislikes: 72
 * Total Accepted:    485.4K
 * Total Submissions: 846.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * 
 * Example:
 * 
 * 
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * Output: [1,3,2]
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

// iterative
var inorderTraversal = function (root) {
  if (!root) return []
  let res = []
  let stack = []

  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    let currNode = stack.pop()
    res.push(currNode.val)
    if (currNode.right) root = currNode.right
  }

  return res
}

// recursive
var inorderTraversal = function (root, res = []) {
  if (!root) return []
  if (root) {
    inorderTraversal(root.left)
    res.push(root.val)
    inorderTraversal(root.right)
  }
  return res
};