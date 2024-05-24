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
//최대 공약수
const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}

const insertGreatestCommonDivisors = (head) => {
  let current = head;
  
  while (current !== null && current.next !== null) {
    const nextNode = current.next;
    const gcdValue = gcd(current.val, nextNode.val);
    const newNode = new ListNode(gcdValue);

    current.next = newNode;
    newNode.next = nextNode;

    current = nextNode;
  }
    
    return head;
};

