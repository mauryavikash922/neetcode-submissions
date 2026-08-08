class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    generateKey(str){
        const freq= Array(26).fill(0);
        str.split("").forEach(char=>freq[char.charCodeAt(0)-97]++);
        return freq.join("-");
    }
    checkInclusion(s1, s2) {
        const key1=this.generateKey(s1);
        const len=s1.length;
        for(let i=0;i<=s2.length-len;i++){
            const key2=this.generateKey(s2.slice(i,i+len));
            if(key1==key2) return true;
        }

        return false;
    }
}
