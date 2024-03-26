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

const reverseList = function(head) {
  let prev = null
  let cur = head
  let next = null;

  while (cur !== null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
  }

  return prev;
};