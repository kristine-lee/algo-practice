/*
From https://leetcode.com/problems/add-two-numbers/
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode()
  let head = l3
  while (l1 !== null || l2 !== null) {
      let firstNode = (l1 === null ?  0 : l1.val)
      let secondNode = (l2 === null ? 0 : l2.val)
      l3.val = firstNode + secondNode + l3.val
      if (l3.val > 9){
          l3.next = new ListNode(1)
          l3.val = l3.val - 10
      }
      else if ((l1 === null || l1.next === null) && (l2 === null || l2.next === null)) break
      else {
          l3.next = new ListNode(0)
      }

      l3 = l3.next
      if (l1 !== null) l1 = l1.next
      if (l2 !== null) l2 = l2.next
  }
  return head
};
