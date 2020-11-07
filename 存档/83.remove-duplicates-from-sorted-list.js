/**
 * [83]
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * 
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

// 递归版
var deleteDuplicates = function (head) {
  if (!head) return head
  if (head.next && head.val === head.next.val) {
    while (head.next && head.val === head.next) {
      head = head.next
    }
  }
  head.next = deleteDuplicates(head.next)
  return head
}

// 循环版
var deleteDuplicates = function (head) {
  if (!head && !head.next) return head
  let slow = head
  let fast = head.next

  while (fast) {
    if (slow.val === fast.val) {
      slow.next = fast.next
      fast = fast.next
    } else {
      fast = fast.next
      slow = slow.next
    }
  }

  return head
};