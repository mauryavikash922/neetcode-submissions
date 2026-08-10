class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    /**
     * 
     */
    isOpeningBracket(ch){
        return ['(',"[","{"].includes(ch);
    }

    getOpenBracket(ch){
        return ch==')'?"(":ch=="]"?"[":"{";
    }
    isValid(s) {
        const st= new Stack();
        for(let i=0;i<s.length;i++){
            if(this.isOpeningBracket(s[i])){
                st.push(s[i]);
            }else{
                if(st.top()!==this.getOpenBracket(s[i])){
                    return false;
                }else{
                    if(!st.isEmpty()){
                        st.pop();
                    }
                }
            }
        }

        if(st.isEmpty()){
            return true ;
        }

        return false;
    }
}
class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.isEmpty() ? null : this.items.pop();
  }
  top() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
}
