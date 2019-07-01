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
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode()
  let curr = head
  let sum = 0

  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val || 0
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val || 0
      l2 = l2.next
    }

    curr.next = new ListNode(sum % 10)
    curr = curr.next

    sum >= 10 ? sum = 1 : sum = 0
  }

  return head.next
};