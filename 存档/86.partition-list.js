/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (37.57%)
 * Likes:    707
 * Dislikes: 189
 * Total Accepted:    168.5K
 * Total Submissions: 447.6K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * Given a linked list and a value x, partition it such that all nodes less
 * than x come before nodes greater than or equal to x.
 * 
 * You should preserve the original relative order of the nodes in each of the
 * two partitions.
 * 
 * Example:
 * 
 * 
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head || !head.next) return head
  let secondPart = new ListNode()
  let secondPos = secondPart

  let curr = new ListNode()
  curr.next = head

  let res = curr

  while (curr && curr.next) {
    if (curr.next.val >= x) {
      secondPos.next = new ListNode(curr.next.val)
      secondPos = secondPos.next

      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  curr.next = secondPart.next
  return res.next
};

console.log(
  partition(aryToList([1, 4, 3, 2, 5, 2]), 3),
  partition(aryToList([1, 3]), 3),
  partition(aryToList([3, 1]), 3),
  partition(aryToList([3, 1]), 0),

);

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