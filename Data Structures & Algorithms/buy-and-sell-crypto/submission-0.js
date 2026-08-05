class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const len=prices.length;
        const prefix=Array(len).fill(0)
        const suffix=Array(len).fill(0)
        prefix[0]=prices[0]
        suffix[len-1]=prices[len-1]
        for(let i=1;i<len;i++){
            prefix[i]=Math.min(prices[i],prefix[i-1])
        }
        for(let i=len-2;i>=0;i--){
            suffix[i]=Math.max(prices[i],suffix[i+1])
        }
        let res=0;
        for(let i=0;i<len;i++){
            res=Math.max(Math.max(suffix[i]-prefix[i],0),res)
        }

        return res;
    }
}
