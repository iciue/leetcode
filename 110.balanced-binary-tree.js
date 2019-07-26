/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (41.19%)
 * Likes:    1330
 * Dislikes: 119
 * Total Accepted:    337.5K
 * Total Submissions: 815.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 * 
 * For this problem, a height-balanced binary tree is defined as:
 * 
 * 
 * a binary tree in which the depth of the two subtrees of every node never
 * differ by more than 1.
 * 
 * 
 * Example 1:
 * 
 * Given the following tree [3,9,20,null,null,15,7]:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * Return true.
 * 
 * Example 2:
 * 
 * Given the following tree [1,2,2,3,3,null,null,4,4]:
 * 
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 * 
 * 
 * Return false.
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  return balanced(root) >= 0
};

// 如果 root 平衡返回其深度, 不过不平衡返回 -1
function balanced(root) {
  if (root) {
    let depthLeft = balanced(root.left)
    if (depthLeft === -1) return -1
    let depthRight = balanced(root.right)
    if (depthRight === -1) return -1
    if (Math.abs(depthLeft - depthRight) <= 1) return Math.max(depthLeft, depthRight) + 1
    return -1
  }
  return 0
}