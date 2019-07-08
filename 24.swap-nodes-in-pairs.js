/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (45.16%)
 * Likes:    1205
 * Dislikes: 107
 * Total Accepted:    327.5K
 * Total Submissions: 724.1K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 更好看的递归
var swapPairs = function (head) {
  if (!head || !head.next) return head
  let newHead = new ListNode(null)
  newHead.next = new ListNode(head.next.val)
  newHead.next.next = new ListNode(head.val)
  newHead.next.next.next = swapPairs(head.next.next)
  return newHead.next
}

// 循环
var swapPairs2 = function (head) {
  if (!head || !head.next) return head
  let newHead = new ListNode()
  let curr = newHead

  while (head && head.next) {
    curr.next = new ListNode(head.next.val)
    curr = curr.next
    curr.next = new ListNode(head.val)
    curr = curr.next

    head = head.next.next
  }

  if (head) curr.next = head


  return newHead.next
}

var swapPairs1 = function (head) {
  if (!head) return null

  let ret = new ListNode()
  ret.next = fn(head, head.next)

  function fn(currNode, nextNode) {
    if (!currNode && !nextNode) return null
    if (!nextNode) return currNode
    let tmp = nextNode.next
    let tmp2 = tmp ? tmp.next : null
    nextNode.next = currNode
    currNode.next = fn(tmp, tmp2)
    return nextNode
  }
  return ret.next
};

console.log(
  swapPairs(aryToList([1, 2, 3, 4]))
);

function aryToList(ary, i = 0) {
  if (ary.length === i) return null
  let head = new ListNode(ary[i])
  head.next = aryToList(ary, ++i)
  return head
}

function ListNode(v) {
  this.val = v
  this.next = null
}