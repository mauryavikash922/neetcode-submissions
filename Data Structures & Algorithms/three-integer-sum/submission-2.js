class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    /**
     * 1. sort the array 
     * 2.create a hash map - set for keeping track of unique elements
     * 3. Take 2 pointes start and end and check thier negative  sum exist in map or not 
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
