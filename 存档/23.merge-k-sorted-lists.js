/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (34.92%)
 * Likes:    2599
 * Dislikes: 168
 * Total Accepted:    408.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */



var mergeKLists = function (lists) {
  let newList = lists[0]

  for (let i = 1, len = lists.length; i < len; i++) {
    newList = merge2Lists(newList, lists[i])
  }

  return newList

  function merge2Lists(list1, list2) {
    let newList = new ListNode()
    let newListPos = newList
    let [curr1, curr2] = [...arguments]

    while (curr1 || curr2) {
      let v1 = curr1 ? curr1.val : Infinity
      let v2 = curr2 ? curr2.val : Infinity

      let min = Math.min(v1, v2)
      switch (min) {
        case v1:
          newListPos.next = new ListNode(v1)
          newListPos = newListPos.next
          curr1 = curr1.next
          break;
        case v2:
          newListPos.next = new ListNode(v2)
          newListPos = newListPos.next
          curr2 = curr2.next
          break;
      }
    }
    return newList.next
  }
}

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

let a = [aryToList([1, 4, 5]), aryToList([1, 3, 4]), aryToList([2, 6])]
let b = [aryToList([]), aryToList([-1, 5, 11]), aryToList([]), aryToList([6, 10])]
console.log(
  mergeKLists(a),
  // mergeKLists(b)
);