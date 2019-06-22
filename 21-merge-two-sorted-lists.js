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
  let len = l1.length + l2.length
  let arr = new Array(len)
  for (let i = 0; i < len; i++) {
    i % 2 === 0 ? arr[i] = l1.shift() : arr[i] = l2.shift()
  }
  return arr
};


mergeTwoLists([1, 2, 4], [1, 3, 4])