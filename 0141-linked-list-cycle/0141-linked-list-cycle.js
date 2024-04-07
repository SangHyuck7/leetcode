/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//투포인터 사용해서 문제 해결
//시간복잡도: O(N)

const hasCycle = function(head) 
{
    let fast = head;
    let slow = head;

    while(fast && fast.next)
    {
        fast = fast.next.next;
        slow = slow.next;

        if(fast === slow) {
          return true
        };
    }

    return false;
};