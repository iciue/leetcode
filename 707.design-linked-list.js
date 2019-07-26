/**
 * Initialize your data structure here.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

var MyLinkedList = function () {
  this.head = null
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (!this.head) return -1
  let curr = this.head
  let idx = 0
  while (curr) {
    if (idx === index) return curr.val
    curr = curr.next
    idx++
  }
  return -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (!this.head) {
    this.head = new ListNode(val)
  } else {
    let newHead = new ListNode(val)
    newHead.next = this.head
    this.head = newHead
  }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) {
    this.head = new ListNode(val)
  } else {
    let newTail = new ListNode(val)
    let curr = this.head
    while (curr) {
      if (curr.next === null) {
        curr.next = newTail
        return 
      }
      curr = curr.next
    }
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) {
    this.addAtHead(val)
  } else {
    if (!this.head) return;
    let prev = this.head
    let curr = this.head.next
    let idx = 1
    while (curr) {
      if (idx === index) { // 在 idx 的位置插入一个数字, 1>3, addAtIndex(1,2) 1>2>3
        let newNode = new ListNode(val)
        newNode.next = curr
        prev.next = newNode
      }
      curr = curr.next
      prev = prev.next
      idx++
    }
    if (idx === index) { // 此时 curr 为 null, prev 为 tail
      prev.next = new ListNode(val)
    }
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (!this.head) return
  if (index === 0) {
    this.head = this.head.next
    return
  }
  let curr = this.head.next
  let prev = this.head
  let idx = 1
  while (curr) {
    if (idx === index) {
      prev.next = curr.next
      curr = null
      return
    }
    curr = curr.next
    prev = prev.next
    idx++
  }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */