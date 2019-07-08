/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (35.23%)
 * Likes:    1272
 * Dislikes: 93
 * Total Accepted:    200.6K
 * Total Submissions: 568.6K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let curr = new ListNode()
  curr.next = head
  head = curr
  let pos = 0

  while (curr) {
    if (pos === m - 1) {
      let between = new ListNode()
      let node = curr.next
      while (pos !== n) {
        let tmp = new ListNode(node.val)
        if (between) tmp.next = between
        between = tmp
        node = node.next
        pos++
      }
      while (between && between.next) {
        curr.next = between
        between = between.next
        curr = curr.next
      }
      curr.next = node
    } else {
      curr = curr.next
      pos++
    }
  }
  return head.next
};


function aryToList(ary, start = 0) {
  if (ary.length === start) return null
  let head = new ListNode(ary[start])
  head.next = aryToList(ary, ++start)
  return head
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}


console.log(
  reverseBetween(aryToList([1, 2, 3, 4, 5]), 1, 4),
  // reverseBetween(aryToList([1, 2, 3, 4, 5]), 2, 4),
)