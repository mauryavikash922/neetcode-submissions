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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */



    mergeTwoLists(list1, list2) {
        let head1=list1,head2=list2,head=null;
        if(head1==null) return head2 ;
        if(head2==null) return head1;
        let temp=head;
        while(head1!=null && head2!=null){
            if(head1.val<=head2.val){
                if(temp==null){
                    temp=head1;
                    head1=head1.next;
                    temp.next=null;
                    head=temp;
                }else{
                    temp.next=head1;
                    head1=head1.next;
                    temp=temp.next;
                    temp.next=null;
                }
            }else{
                if(temp==null){
                    temp=head2;
                    head2=head2.next;
                    temp.next=null;
                    head=temp;
                }else{
                    temp.next=head2;
                    head2=head2.next;
                    temp=temp.next;
                    temp.next=null;
                }
            }
        }

        if(head1!=null){
            temp.next=head1;
        }

        if(head2!=null){
            console.log("temp",temp)
            temp.next=head2;
        }

         return head;
    }

   
}
