/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (47.74%)
 * Likes:    2356
 * Dislikes: 341
 * Total Accepted:    615.2K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let newHead = new ListNode()
  let pos = newHead

  while (l1 && l2) {
    let v1 = l1.val
    let v2 = l2.val

    if (v1 < v2) {
      pos.next = new ListNode(v1)
      l1 = l1.next
    } else {
      pos.next = new ListNode(v2)
      l2 = l2.next
    }
    pos = pos.next
  }

  while (l1) {
    pos.next = new ListNode(l1.val)
    pos = pos.next
    l1 = l1.next
  }
  while (l2) {
    pos.next = new ListNode(l2.val)
    pos = pos.next
    l2 = l2.next
  }

  return newHead.next
};