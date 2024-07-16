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
 //시간복잡도: O(n)
const detectCycle = function(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      //사이클 존재 확인
      if (slow === fast) {
        slow = head;
        
        while (slow !== fast) {
          slow = slow.next;
          fast = fast.next;
        }
          return slow;
        }
    }

  return null;
};