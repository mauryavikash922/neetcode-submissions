class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    


    search(nums, t) {
        let l=0,r=nums.length-1;

        while(l<=r){
            const m=Math.floor((l+r)/2);
            if(nums[m]===t){
                return m ;
            }


            if(nums[l]<=nums[m]){
                //left sorted portion 

                if(nums[m]<t || t< nums[l]){
                    l=m+1
                }else{
                    r=m-1
                }
            }else{
                //right sorted portion
                if(t<nums[m] || t>nums[r]){
                    r=m-1
                }else{
                    l=m+1
                }
            }
        }

        return-1
    }

}
