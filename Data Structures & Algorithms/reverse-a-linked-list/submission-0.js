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
     * @return {ListNode}
     */
    reverseList(head) {
        function reverse(node,prev){
            if(node.next==null){
                head=node;
                node.next=prev;
                return;
            }
            reverse(node.next,node);
            node.next=prev

        }

        if(head==null){
            return head
        }
        reverse(head,null);
        return head;
    }
}
