/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 *
 * https://leetcode.com/problems/range-sum-of-bst/description/
 *
 * algorithms
 * Easy (78.74%)
 * Likes:    392
 * Dislikes: 67
 * Total Accepted:    69.1K
 * Total Submissions: 88.1K
 * Testcase Example:  '[10,5,15,3,7,null,18]\n7\n15'
 *
 * Given the root node of a binary search tree, return the sum of values of all
 * nodes with value between L and R (inclusive).
 * 
 * The binary search tree is guaranteed to have unique values.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
 * Output: 32
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 * Output: 23
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The number of nodes in the tree is at most 10000.
 * The final answer is guaranteed to be less than 2^31.
 * 
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function (node, L, R) {
  if (node === null) return 0
  if (node.val > R) return rangeSumBST(node.left, L, R)
  if (node.val < L) return rangeSumBST(node.right, L, R)
  return node.val + rangeSumBST(node.left, L, R) + rangeSumBST(node.right, L, R)
}

var rangeSumBST = function (root, L, R) {
  let sum = 0
  recur(root)

  function recur(node) {
    if (!node) return
    if (node.val > R) recur(node.left)
    if (node.val < L) recur(node.right)
    if (node.val >= L && node.val <= R) {
      sum += node.val
      recur(node.left)
      recur(node.right)
    }
  }
}