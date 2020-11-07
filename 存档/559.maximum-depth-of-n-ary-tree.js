/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/description/
 *
 * algorithms
 * Easy (65.63%)
 * Likes:    377
 * Dislikes: 20
 * Total Accepted:    53K
 * Total Submissions: 80.6K
 * Testcase Example:  '{"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1}'
 *
 * Given a n-ary tree, find its maximum depth.
 * 
 * The maximum depth is the number of nodes along the longest path from the
 * root node down to the farthest leaf node.
 * 
 * For example, given a 3-ary tree:
 * 
 * 
 * 
 * 
 * 
 * 
 * We should return its max depth, which is 3.
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The depth of the tree is at most 1000.
 * The total number of nodes is at most 5000.
 * 
 * 
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  if (root.children.length === 0) return 1
  let r = root.children.map(root => 1 + maxDepth(root))
  return Math.max(...r)
};

var maxDepth = function (root) {
  if (!root) return 0

  let depth = 0
  let stack = [root]

  while (stack.length > 0) {
    depth += 1

    let count = stack.length
    while (count > 0) {
      let node = stack.shift()
      for (let i = 0, len = node.children.length; i < len; i++) {
        stack.push(node.children[i])
      }
      count -= 1
    }
  }

  return depth
};

// {
//   "$id": "1",
//   "children": [{
//     "$id": "2",
//     "children": [{
//       "$id": "5",
//       "children": [],
//       "val": 5
//     }, {
//       "$id": "6",
//       "children": [],
//       "val": 6
//     }],
//     "val": 3
//   }, {
//     "$id": "3",
//     "children": [],
//     "val": 2
//   }, {
//     "$id": "4",
//     "children": [],
//     "val": 4
//   }],
//   "val": 1
// }