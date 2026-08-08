class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    maxFreq(arr){
        return arr.reduce((acc,ele)=>Math.max(acc,ele));
    }
    characterReplacement(s, k) {
        const freq=Array(26).fill(0);
        let l=0;
        let r=0;
        let res=0;

        while(l<=r && r<s.length){
            freq[s[r].charCodeAt(0)-65]++;
            while((r-l+1)-this.maxFreq(freq)>k){
                 freq[s[l].charCodeAt(0)-65]--;
                 l++;
            }
            res=Math.max(res,r-l+1);
            r++;
        }

        return res;
       
    }
}
