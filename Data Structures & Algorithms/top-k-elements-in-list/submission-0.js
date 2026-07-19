class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map=new Map();
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                const count=map.get(nums[i]);
                map.set(nums[i],count+1)
            }else{
                map.set(nums[i],1)
            }
        }

        const arr= Array.from(map).sort((a,b)=>b[1]-a[1])
        const result=[];
        for(let i=0;i<k;i++){
            result.push(arr[i][0])
        }

        return result 
    }
}
