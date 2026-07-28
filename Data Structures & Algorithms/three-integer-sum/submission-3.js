class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    /**
     * 1. Sort Array 
     * 2. iterate each array and consider each element it target value at ith index
     * 3. now lets find the two sum value over ith+1 to n-1 array and skip the duplicate 
     */

    const result=[];
    nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i] ==nums[i-1]) continue;
        if(nums[i]>0) break;

        const target=nums[i];
        let j=i+1;
        let k=nums.length-1;
        while(j<k && k>=0 && j<nums.length){
            const sum= nums[j]+nums[k];
            if(sum== -target){
                result.push([target, nums[j],nums[k]]);
                j++;
                k--;
                while(j<k && nums[j]==nums[j-1]) j++;
                while(j<k && nums[k]==nums[k+1]) k--;

            }else if(sum< -target){
                j++;
            }else{
                k--;
            }

        }
        
    }

    return result
    }

    
}
