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
        function reverse(node, prev) {
            if (node == null) {
                return node
            }
            if (node.next == null) {
                node.next = prev;
                return node;
            }
            const head = reverse(node.next, node);
            node.next = prev;
            return head;

        }


        return reverse(head, null);

    }
}
