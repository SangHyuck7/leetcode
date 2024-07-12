/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
//첫 번째 노드(L0)와 마지막 노드(Ln), 두 번째 노드(L1)와 마지막에서 두 번째 노드(Ln-1) 순으로 노드 정렬 문제
//풀이노트 작성
//시간복잡도: O(n)
const reorderList = function (head) {
  if (!head) return;

  let slow = head;
  let fast = head;
  //투포인터 중간지점 찾기
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;
  //중간 이후의 리스트를 반전
  while (curr !== null) {
    let nextTemp = curr.next;

    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  let first = head;
  let second = prev;
  //리스트 병합하기
  while (second.next !== null) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};
