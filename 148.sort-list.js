/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (35.85%)
 * Likes:    1503
 * Dislikes: 78
 * Total Accepted:    191.4K
 * Total Submissions: 532.3K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list in O(n log n) time using constant space complexity.
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
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

// 链表冒泡
var sortList = function (head) {
  let k = null;
  do {
    let sorted = false
    let p = head
    let count = 1
    while (p && p.next) {
      let v1 = p.val
      let v2 = p.next.val
      if (v1 > v2) {
        sorted = true
        let tmp = p.val
        p.val = p.next.val
        p.next.val = tmp
      }
      p = p.next
      count++
      if (count === k - 1) break
    }
    if (!sorted) break
    k = k !== null ? --k : count
  } while (k > 0);

  return head
}


// 分割后归并
var sortList = function (head) {
  if (!head || !head.next) return head
  let firstPart = head
  let midPos = head
  head = head.next
  let secondPart

  while (head && head.next) {
    head = head.next.next
    midPos = midPos.next
  }
  secondPart = midPos.next
  midPos.next = null


  firstPart = sortList(firstPart)
  secondPart = sortList(secondPart)

  let newHead = new ListNode()
  let pos = newHead
  while (firstPart && secondPart) {
    let v1 = firstPart.val
    let v2 = secondPart.val

    if (v1 < v2) {
      pos.next = new ListNode(v1)
      firstPart = firstPart.next
    } else {
      pos.next = new ListNode(v2)
      secondPart = secondPart.next
    }
    pos = pos.next
  }

  if (firstPart) pos.next = firstPart
  if (secondPart) pos.next = secondPart

  return newHead.next
};

console.log(sortList(aryToList([9, 2, 3, 4, 6, 5])));


function aryToList(ary, i = 0) {
  if (ary.length === i) return null
  let head = new ListNode(ary[i])
  head.next = aryToList(ary, ++i)
  return head
}

function ListNode(v) {
  this.val = v
  this.next = null
}