class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n=nums.length;
        let start=0;
        let end=n-1;
        while(start<=end){
            const mid=Math.floor((end+start)/2);
            console.log("mid",mid)

            if(nums[mid]==target){
                return mid;
            }else if(nums[mid]<target){
                start=mid+1;
            }else{
                end=mid-1;
            }
        }

        return -1
    }
}
