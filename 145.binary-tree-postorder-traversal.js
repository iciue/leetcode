/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (48.97%)
 * Likes:    957
 * Dislikes: 48
 * Total Accepted:    270.9K
 * Total Submissions: 551K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the postorder traversal of its nodes' values.
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
 * Output: [3,2,1]
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
// iteratively 2.0 先右后左的前序遍历 输出倒转 即是后续遍历
var postorderTraversal = function (root) {
  if (!root) return []
  let res = []
  let stack = [root]

  while (stack.length) {
    let root = stack.pop()
    res.push(root.val)
    if (root.left) stack.push(root.left)
    if (root.right) stack.push(root.right)
  }

  return res.reverse()
}

// iteratively 1.0 使用 flag 标记根节点的左右子树是否已经被遍历
var postorderTraversal = function (root) {
  if (!root) return []
  let res = []
  let stack = [
    [root, false]
  ]

  while (stack.length) {
    let idx = stack.length - 1
    let [root, flag] = stack[idx]
    if (flag) {
      res.push(root.val)
      stack.pop()
    } else {
      if (root.right) stack.push([root.right, false])
      if (root.left) stack.push([root.left, false])
      stack[idx][1] = true
    }
  }

  return res
}

// recursive
var postorderTraversal = function (root, res = []) {
  if (root) {
    postorderTraversal(root.left, res)
    postorderTraversal(root.right, res)
    res.push(root.val)
    return res
  } else {
    return res
  }
};