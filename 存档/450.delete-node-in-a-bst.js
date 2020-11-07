/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
 *
 * https://leetcode.com/problems/delete-node-in-a-bst/description/
 *
 * algorithms
 * Medium (40.15%)
 * Likes:    969
 * Dislikes: 61
 * Total Accepted:    70K
 * Total Submissions: 173.8K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n3'
 *
 * Given a root node reference of a BST and a key, delete the node with the
 * given key in the BST. Return the root node reference (possibly updated) of
 * the BST.
 * 
 * Basically, the deletion can be divided into two stages:
 * 
 * Search for a node to remove.
 * If the node is found, delete the node.
 * 
 * 
 * 
 * Note: Time complexity should be O(height of tree).
 * 
 * Example:
 * 
 * root = [5,3,6,2,4,null,7]
 * key = 3
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 3   6
 * ⁠/ \   \
 * 2   4   7
 * 
 * Given key to delete is 3. So we find the node with value 3 and delete it.
 * 
 * One valid answer is [5,4,6,2,null,null,7], shown in the following BST.
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 4   6
 * ⁠/     \
 * 2       7
 * 
 * Another valid answer is [5,2,6,null,4,null,7].
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 2   6
 * ⁠  \   \
 * ⁠   4   7
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null
  let [toBeDelete, toBeDeleteParent] = findKey(root, key)
  if (!toBeDelete) return root


  if (!toBeDelete.left && !toBeDelete.right) { // 无左右子树则直接删除
    if (toBeDeleteParent == null) return null // 即要删除的元素即是根节点, 且树只有根节点
    if (toBeDeleteParent.left) {
      toBeDeleteParent.left.val === toBeDelete.val ? toBeDeleteParent.left = null : toBeDeleteParent.right = null
    } else {
      toBeDeleteParent.right = null
    }
    return root
  }
  if (toBeDelete.left && toBeDelete.right || toBeDelete.left) { // 左右子树都存在或左子树存在..
    let nextDelete = findMaximum(toBeDelete.left) // 从左子树中查找最大的元素替换要删除的元素的根节点
    let tmp = nextDelete.val
    deleteNode(root, nextDelete.val) // 处理要用来替换的元素
    toBeDelete.val = tmp
  } else { // 只有右子树
    let nextDelete = findMinimum(toBeDelete.right) // 从右子树中查找最小的值作为替换要删除节点的元素
    let tmp = nextDelete.val
    deleteNode(root, nextDelete.val) // 处理要用来替换的元素
    toBeDelete.val = tmp
  }
  return root
};

function findMaximum(root) { // 从 BST 中查找最大值, 即不停查找右子树直到叶子节点
  if (!root.right) return root
  return findMaximum(root.right)
}

function findMinimum(root) { // 从 BST 中查找最小值, 即不停查找左子树直到叶子节点
  if (!root.left) return root
  return findMinimum(root.left)
}

function findKey(root, key, parent = null) { // 返回要删除的值, 及其父节点
  if (!root) return [null, null]
  if (root.val === key) return [root, parent]
  if (root.val > key) return findKey(root.left, key, root)
  if (root.val < key) return findKey(root.right, key, root)
}