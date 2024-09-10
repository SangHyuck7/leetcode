/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
//문제풀이 실패 로 해설참고 다시 풀어 봐야함
//시간복잡도: O(리스트1 길이 + 리스트2 길이)
const mergeInBetween = function(list1, a, b, list2) {
  let prevA = list1; // a번째 노드 직전 노드 포인터
  let afterB = list1; // b번째 노드 이후 노드 포인터
  
  // a번째 노드 직전 노드 찾기
  for (let i = 0; i < a - 1; i++) {
    prevA = prevA.next;
  }
  
  // b번째 노드 이후 노드 찾기
  for (let i = 0; i <= b; i++) {
    afterB = afterB.next;
  }
  
  let lastNodeList2 = list2;
  
  while (lastNodeList2.next) {
        lastNodeList2 = lastNodeList2.next;
  }

  // 머지 단계
  prevA.next = list2;
  lastNodeList2.next = afterB;

  return list1;
};