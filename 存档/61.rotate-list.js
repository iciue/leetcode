/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
 *
 * https://leetcode.com/problems/rotate-list/description/
 *
 * algorithms
 * Medium (27.36%)
 * Likes:    639
 * Dislikes: 825
 * Total Accepted:    198.8K
 * Total Submissions: 725.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, rotate the list to the right by k places, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0->1->2->NULL, k = 4
 * Output: 2->0->1->NULL
 * Explanation:
 * rotate 1 steps to the right: 2->0->1->NULL
 * rotate 2 steps to the right: 1->2->0->NULL
 * rotate 3 steps to the right: 0->1->2->NULL
 * rotate 4 steps to the right: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head
  let cycle = head
  let len = 1
  let rotate = null

  while (cycle) {
    if (cycle.next === null) {
      if (k === len || k % len === 0) return head
      cycle.next = head
      rotate = k > len ? len - (k % len) : len - k
      len = 0
    }
    if (rotate && len === rotate) {
      head = cycle.next
      cycle.next = null
      break
    } else {
      cycle = cycle.next
      len++
    }
  }
  return head
};

function ListNode(val) {
  this.val = val
  this.next = null
}

function aryToList(ary, start = 0) {
  if (ary.length === start) return null
  let head = new ListNode(ary[start])
  head.next = aryToList(ary, start += 1)
  return head
}

console.log(
  rotateRight(aryToList([1, 2]), 2)
);