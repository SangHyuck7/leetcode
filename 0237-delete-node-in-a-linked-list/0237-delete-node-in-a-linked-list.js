/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//연결리스트 자료구조 기본 문제
//시간복잡도: O(n)

const deleteNode = function(node) {
  let nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
};