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
//시간 복잡도 O(n)
const middleNode = function(head) {
  let obj = {};
  let current = head;
  let counter = 1;

  while(current) {
    obj[counter] = current;
    counter++;
    current = current.next;
    }

    return obj[Math.ceil(counter/2)]
};