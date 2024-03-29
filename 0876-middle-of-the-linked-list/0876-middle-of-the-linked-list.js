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
// 처음 해쉬 테이블 방법으로 접금 하지만 정수 반환
// 투포인터로 문제 해결
// 시간 복잡도는 모두 O(n)으로 동일
// 공간 복잡도는 해쉬 테이블은 모든 노드 저장 O(n) 투포인터는 하나의 노드 저장 O(1) 

const middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// const middleNode = function(head) {
//   const table = new Map();
//   let count = 1;
//   let result = null;

//   while (head.val && head.next) {
//     head = head.next;
//     table.set(count, head.val);
//     count += 1;
//   }
  
//   if (count % 2 === 0) {
//     result = table.get((count / 2) + 1);
//   } else {
//     result = table.get(Math.round(count / 2));
//   }

//   return result;
// };