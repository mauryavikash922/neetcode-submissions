class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false;
        }
        const freq=Array(26).fill(0);
        for(let i=0;i<s.length;i++){
            const indexS=s[i].charCodeAt(0)-97;
            const insdexT=t[i].charCodeAt(0)-97;
            freq[indexS]++;
            freq[insdexT]--;
        }
        return freq.every(value=>value==0)
    }
}
