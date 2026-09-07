/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let first=head, second=head;
        let cnt=n;
        while(cnt>0){
            if(second!=null){
                second=second.next
            }
            cnt--;
        }
        let prev=null
        while(second!=null){
            prev=first;
            first=first.next;
            second=second.next;

        }
        if(prev==null){
            head=head.next;

        }else{
            prev.next=first.next;
        }


        return head;

    }
}
