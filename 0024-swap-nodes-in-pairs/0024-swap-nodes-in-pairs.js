/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//시간복잡도: O(n)
const swapPairs = function(head) {
  if (!head || !head.next) return head;
  
  let point = head;
  
  while (point && point.next) {
    const temp = point.val;
    point.val = point.next.val;
    point.next.val = temp;
    
    point = point.next.next
  }
  
  return head;
};