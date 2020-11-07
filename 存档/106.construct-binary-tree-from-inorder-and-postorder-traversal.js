/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (39.76%)
 * Likes:    915
 * Dislikes: 20
 * Total Accepted:    159.3K
 * Total Submissions: 398.8K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 * 
 * Return the following binary tree:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length && !postorder.length) return null
  if (inorder.length === 1 && postorder.length === 1) return new TreeNode(inorder[0])
  
  let rootVal = postorder.pop()
  let pos = inorder.indexOf(rootVal)

  let inOrderLeft = inorder.slice(0, pos)
  let inOrderRight = inorder.slice(pos + 1)
  let leftLength = inOrderLeft.length

  let postOrderLeft = postorder.slice(0, leftLength)
  let postOrderRight = postorder.slice(leftLength)

  let root = new TreeNode(rootVal)
  root.left = buildTree(inOrderLeft, postOrderLeft)
  root.right = buildTree(inOrderRight, postOrderRight)

  return root
};