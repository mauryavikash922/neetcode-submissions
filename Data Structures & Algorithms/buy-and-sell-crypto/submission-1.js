class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * 
     * Approach 1: Time: O(n), Space : O(n)
     * Appraoch 2: instead of keeping min-so-far prefix and max-so-far suffix , we need only the min-so-far at comparison time i.e at ith index 
     */


    maxProfit(prices) {
        // const len=prices.length;
        // const prefix=Array(len).fill(0)
        // const suffix=Array(len).fill(0)
        // prefix[0]=prices[0]
        // suffix[len-1]=prices[len-1]
        // for(let i=1;i<len;i++){
        //     prefix[i]=Math.min(prices[i],prefix[i-1])
        // }
        // for(let i=len-2;i>=0;i--){
        //     suffix[i]=Math.max(prices[i],suffix[i+1])
        // }
        // let res=0;
        // for(let i=0;i<len;i++){
        //     res=Math.max(Math.max(suffix[i]-prefix[i],0),res)
        // }

        // return res;


        //Approach 2: 

        const len=prices.length;
        let minSoFar=prices[0];
        let res=0;
        for(let i=1;i<len;i++){
            res=Math.max(res,Math.max(prices[i]-minSoFar),0);
            minSoFar=Math.min(minSoFar,prices[i])
        }

        return res;
    }
}
