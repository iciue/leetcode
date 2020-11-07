/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (31.23%)
 * Likes:    929
 * Dislikes: 66
 * Total Accepted:    160K
 * Total Submissions: 510.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 * 
 * Example 1:
 * 
 * 
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 * 
 * Example 2:
 * 
 * 
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let firstPart = head
  let res = firstPart
  let mid = head
  let secondPart

  while (head.next && head.next.next) {
    head = head.next.next
    mid = mid.next
  }
  secondPart = mid.next
  mid.next = null

  let reverseList
  while (secondPart) {
    let node = new ListNode(secondPart.val)
    if (reverseList) node.next = reverseList
    reverseList = node
    secondPart = secondPart.next
  }

  console.log(reverseList);
  while (firstPart && reverseList) {
    let node = new ListNode(reverseList.val)
    let next = firstPart.next
    firstPart.next = node
    node.next = next

    firstPart = next
    reverseList = reverseList.next
  }
  return res
}


function aryToList(ary, idx = 0) {
  if (ary.length === idx) return null
  let head = new ListNode(ary[idx])
  head.next = aryToList(ary, ++idx)
  return head
}

function ListNode(val) {
  this.val = val
  this.next = null
}

console.log(
  reorderList(aryToList([1, 2, 3, 4, 5])),
  // reorderList(aryToList([1, 2, 3, 4])),
);