class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    /***
     * Solution 1: regular sorting + map 
     * Time Complexity - O(nlogn)
     * Space Complexity - O(n)
     * 
     * Solution 2: Count sorting + map
     * Time Complexity: O(n)
     * Space Complexity : O)(n)
     */
    topKFrequent(nums, k) {
        // const map=new Map();
        // for(let i=0;i<nums.length;i++){
        //     if(map.has(nums[i])){
        //         const count=map.get(nums[i]);
        //         map.set(nums[i],count+1)
        //     }else{
        //         map.set(nums[i],1)
        //     }
        // }

        // const arr= Array.from(map).sort((a,b)=>b[1]-a[1])
        // const result=[];
        // for(let i=0;i<k;i++){
        //     result.push(arr[i][0])
        // }

        // return result 


        const freqMap= new Map();
        for (let i =0;i<nums.length;i++){
            freqMap.set(nums[i],(freqMap.get(nums[i])||0)+1)
        }

        const bucket= Array(nums.length+1).fill(null).map(()=>[]);

        for(const [val,freq] of freqMap){
            bucket[freq].push(val);
        }

        let i=nums.length;
        const result=[];
        let count=0;
        while(i>0 && count<k){
            const bucketVal=bucket[i];
            i--;
            for(let j=0;j<bucketVal.length;j++){
                result.push(bucketVal[j]);
                count++;
                if(count>=k){
                    break;
                }
            }
            
        }

        return result ;

    }
}
