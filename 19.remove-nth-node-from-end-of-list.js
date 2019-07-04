/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next === null) return head = null
  let flag = new ListNode()
  flag.next = head
  let quickPos = flag
  let slow = flag

  while (quickPos.next !== null) {
    quickPos = quickPos.next
    n === 0 ? slow = slow.next : n--
    if (quickPos.next === null) {
      slow.next = slow.next.next
    }
  }

  return flag.next
};