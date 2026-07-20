class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * Time complexity- O(n)
     * Space complexity- O(n)
     */
    productExceptSelf(nums) {
        let product=nums[0];
        const suffix=[...nums]
        for(let i=nums.length-2;i>=0;i--){
            suffix[i]*=suffix[i+1];
        }


        suffix[0]=suffix[1];
        for(let i=1;i<nums.length-1;i++){
            suffix[i]=product*suffix[i+1];
            product*=nums[i];
        }
        suffix[nums.length-1]=product;


        return suffix;
    }
}
