class MinStack {
    /**
     * 
     * 2,4,1,0,1,5
     * 
     * 4 2 1 1 0 
     */
    constructor() {
        this.items=[];
        this.minStack=[];
        this.tempStack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);
        while(this.minStack[this.minStack.length-1] < val){
            this.tempStack.push(this.minStack.pop());
        }
        this.minStack.push(val);
        while(this.tempStack.length){
            this.minStack.push(this.tempStack.pop());
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.items.length==0){
            return null;
        }
        const val=this.items.pop();
        while(this.minStack[this.minStack.length-1]!=val){
            this.tempStack.push(this.minStack.pop());
        }
        this.minStack.pop();
        while(this.tempStack.length!==0){
            this.minStack.push(this.tempStack.pop())
        }

        return val;
    }

    /**
     * @return {number}
     */
    top() {
        return this.items.length? this.items[this.items.length-1] :null
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.items.length? this.minStack[this.minStack.length-1]:null
    }
}
