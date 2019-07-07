/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (55.31%)
 * Likes:    2449
 * Dislikes: 65
 * Total Accepted:    616.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
// 递归 2.0
var reverseList = function (head) {
  if (!head || !head.next === null) return head
  let newHead = reverseList(head.next)
  let tmp = head.next
  tmp.next = head
  head.next = null
  return newHead
}

// 递归版
var reverseList = function (head) {
  let list = new ListNode(null)

  function recur(node) {
    if (node.next) recur(node.next)
    list.next = new ListNode(node.val)
    list = list.next
  }
  recur(head)
  return list.next
}

// 循环版
var reverseList = function (head) {
  let pointer = new ListNode()
  while (head) {
    let node = new ListNode(head.val)
    if (pointer) node.next = pointer
    pointer = node
    head = head.next
  }
  return pointer
};

// 方便调试
function arrayToList(ary, start = 0) {
  if (start == ary.length) return null
  var headNode = {
    val: ary[start],
    next: arrayToList(ary, ++start)
  }
  return headNode
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

console.log(
  reverseList2(arrayToList([0, 1, 2, 3, 4]))
);