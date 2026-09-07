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
     * @return {void}
     */

    reverse(head){
        function helper(node, prev){
            if(node==null){
                return null;
            }
            if(node.next==null){
                node.next=prev;
                return node;
            }
           const head= helper(node.next,node);
            node.next=prev;
            return  head;
        }


        return helper(head,null);


    }
    reorderList(head) {
    /**
     * 1. break the list into 2 list 
     * 2. find the mid node
     * 3. reverse the element after the mid node 
     * 4. now pick one by one each element form each list and form rearanged list 
     */

        let slow =head, fast=head;
        while(fast!=null && fast.next !=null){
            slow=slow.next;
            fast=fast.next.next;
        }
       // slow would point to mid element 
       let mid=slow.next;
       slow.next=null;
        let head2=this.reverse(mid);
        console.log("mid",slow,head2);
        

        const node= new ListNode();
        let tail=node;
        while(head2!=null){
            tail.next=head;
            head=head.next;
            tail=tail.next;
            tail.next=head2;
            head2=head2.next;
            tail=tail.next;
        }
        tail.next=head;

        return node.next;
    }
}
