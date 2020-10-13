/*
from: https://leetcode.com/problems/reverse-linked-list/
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/


//iterative; O(n) time, O(1) space
//you need a previous pointer (you don't have this built in for singly linked lists), a pointer to the current node, and a temporary next pointer

var reverseList = function(head) {
  let previous = null;
  let current = head;
  let nextTemp = null;
  while (current !== null) {
      nextTemp = current.next; //1. temporary next variable, assigned to the node that current.next is currently pointing at
      current.next = previous; //2. flips the node's pointer from --> to <--
      previous = current; //3. shifts the variables over toward --> direction, so you can loop through the rest of the list
      current = nextTemp;
  }
  return previous //new head at the end. for the given example, it's 5.
};

//recursive; O(n) time because we're still touching n number of nodes, but O(n) space because we're creating a stack
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head //base case: you're at the last node
  }
  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead
};
