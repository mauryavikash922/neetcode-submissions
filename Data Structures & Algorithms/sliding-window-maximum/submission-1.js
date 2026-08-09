/**
 * Deque = Double ended queue
 * Operations:
 * 1. AddFront - O(1)
 * 2. AddRear - O(1)
 * 3. removeFront - O(1)
 * 4. removeRear - O(1)
 * 5. peakFront - O(1)
 * 6. peakRear - O(1)
 * 7. size - O(1)
 * 8. isEmpty - O(1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque1 {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  addFront(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      node.next = this.front;
      this.front.prev = node;
      this.front = node;
    }
    this.size++;
  }

  addRear(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      node.prev = this.rear;
      this.rear = node;
    }

    this.size++;
  }

  removeRear() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.rear;
    const prevNode = removedNode.prev;
    if (prevNode) prevNode.next = null;
    this.rear = prevNode;
    if (this.rear == null) {
      this.front = null;
    }
    this.size--;

    return removedNode.data;
  }

  removeFront() {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.front;
    const nextNode = removedNode.next;
    if (nextNode) nextNode.prev = null;
    this.front = nextNode;
    if (this.front == null) {
      this.rear = null;
    }
    this.size--;
    return removedNode.data;
  }

  isEmpty() {
    return this.size == 0;
  }

  peekFront() {
    return this.isEmpty() ? null : this.front.data;
  }

  peekRear() {
    return this.isEmpty() ? null : this.rear.data;
  }

  getSize() {
    return this.size;
  }
}



class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n=nums.length;
        const output= new Array(n-k+1);
        const dq= new Deque1();
        let l=0,r=0;
        while(r<n){
            while(!dq.isEmpty() && nums[dq.peekRear()]<nums[r]){
                dq.removeRear();
            }

            dq.addRear(r);
            if(l>dq.peekFront()){
                dq.removeFront();
            }

            if(r+1>=k){
                output[l]=nums[dq.peekFront()];
                l++;
            }

            r++;
        }

        return output ;
    }
}
