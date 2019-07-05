/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  let res = new ListNode()

  function insert(node1, node2) {
    if (node1 === null && node2 === null) return null
    if (!node1) return node2.val
    if (!node2) return node1.val
    let currNode = new ListNode()
    if (node1.val < node2.val) {
      currNode.val = node1.val
      currNode.next = insert(node1.next, node2)
    } else {
      currNode.val = node2.val
      currNode.next = insert(node1, node2.next)
    }
    return currNode
  }
  res = insert(l1, l2)

  return res
};


mergeTwoLists([1, 2, 4], [1, 3, 4])