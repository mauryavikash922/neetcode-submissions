class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    /**
     * Time Complexity:  O(n*k); n= length of array and k = length of string 
     * SpaceComlexity : O(n)
     */

    generateKey(str){
        if(str.length==0){
            return ""
        }
        const freq=Array(26).fill(0);
        for(let i=0;i<str.length;i++){
            const idx=str[i].charCodeAt(0)-97;
            freq[idx]++
        }

        return freq.join("-")
    }
    groupAnagrams(strs) {
        const map=new Map();
        for(let i=0;i<strs.length;i++){
            const key =this.generateKey(strs[i]);
            if(map.has(key)){
                const val=map.get(key);
                map.set(key,[...val,strs[i]])
            }else{
                map.set(key,[strs[i]])
            }
        }
        const result=[];
        for(const [,item] of map){
            result.push(item)
        }

        return result

    }
}
