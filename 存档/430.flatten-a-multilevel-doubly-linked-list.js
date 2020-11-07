/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 *
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/description/
 *
 * algorithms
 * Medium (42.66%)
 * Likes:    370
 * Dislikes: 64
 * Total Accepted:    25.1K
 * Total Submissions: 58.7K
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let list = new ListNode()
  list.next = head

  while (head) {
    if (head.child) {
      let child = flatten(head.child)
      let after = head.next
      head.child = null
      head.next = child
      child.prev = head
      while (child.next) {
        child = child.next
      }

      if (after) {
        child.next = after
        after.prev = child
      }

      head = after
    } else {
      head = head.next
    }
  }

  return list.next
};