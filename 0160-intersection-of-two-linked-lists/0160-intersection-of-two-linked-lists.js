/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//시간복잡도: O(n)
//리스트의 끝에 도달하면, 다른 리스트의 시작 풀이 참고
const getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;

  let p1 = headA, p2 = headB;

  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }

  return p1;
};