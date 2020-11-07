/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (33.33%)
 * Likes:    879
 * Dislikes: 75
 * Total Accepted:    187.5K
 * Total Submissions: 562K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->1->2->3
 * Output: 2->3
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

// 递归
var deleteDuplicates = function (head) {
  if (!head) return head
  if (head.next && head.val === head.next.val) {
    while (head.next && head.val === head.next.val) {
      head = head.next
    }
    return deleteDuplicates(head.next)
  } else {
    head.next = deleteDuplicates(head.next)
    return head
  }
}
var deleteDuplicates = function (head) {
  if (head === null) return null
  var list = new ListNode(null)
  list.next = head
  var cur = head
  var pre = list
  while (cur.next) {
    if (cur.next.val === cur.val) {
      while (cur.next && cur.next.val === cur.val) {
        cur = cur.next
      }
      cur = cur.next
      pre.next = cur
    } else {
      cur = cur.next
      pre = pre.next
    }
    if (cur === null) break
  }
  return list.next
}