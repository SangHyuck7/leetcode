/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function(l1, l2) {
  let node = l1;
  let carry = 0;
    
  while (node || l2) {
     let currSum = (node ? node.val : 0) + (l2 ? l2.val : 0) + carry;
     carry = Math.floor(currSum / 10);
     node.val = currSum % 10;
      
     if (node && !node.next && l2 && l2.next) {
         node.next = l2.next;
         l2.next = null;
     }
     
     if (node.next === null && carry > 0) {
         node.next = new ListNode(carry);
         carry = 0;
         break;
     }
     if (node) node = node.next;
     if (l2) l2 = l2.next;
  }

  return l1;
}