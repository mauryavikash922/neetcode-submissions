class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     * 
     * TimeComplexity: O(n)
     * Space complexity: O(n)
     */
    trap(height) {
        // const len =height.length;
        // const prefixMax=Array(len).fill(null)
        // const SuffixMax=Array(len).fill(null)
        // prefixMax[0]=height[0];
        // for(let i=1;i<len;i++){
        //     prefixMax[i]=Math.max(prefixMax[i-1],height[i]);
        // }
        // SuffixMax[len-1]=height[len-1];
        // for(let i=len-2;i>=0;i--){
        //     SuffixMax[i]=Math.max(SuffixMax[i+1],height[i]);
        // }


        // let sum=0;
        // for(let i=0;i<len;i++){
        //     sum += Math.abs(Math.min(SuffixMax[i],prefixMax[i])-height[i]);
        // }

        // return sum;


        //Approach 2: 

        const len =height.length;
        let left=0;
        let right=len-1;
        let maxL=height[0];
        let maxR=height[len-1];

        let res=0;

        while(left<right){
            if(height[left]<=height[right]){
                maxL=Math.max(maxL,height[left]);
                res+=maxL-height[left];
                left++;
            }else{
                maxR=Math.max(maxR,height[right]);
                res+=maxR-height[right];
                right--;
            }
        }

        return res;

    }
}
