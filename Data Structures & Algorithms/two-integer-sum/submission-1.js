class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmap=new Map();
        for(let i=0;i<nums.length;i++){
            hashmap.set(nums[i],i);
        }
        for(let i=0;i<nums.length;i++){
           if(hashmap.has(target-nums[i])){
            const idx =hashmap.get(target-nums[i])
            if(i!=idx){

            return [i,idx].sort((a,b)=>a-b)
            }
           }
        }

    }
}
