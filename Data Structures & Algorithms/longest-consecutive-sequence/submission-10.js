class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * Time: O(n)
     * Space: O(m)- m is unique elements in array 
     */
    longestConsecutive(nums) {
        if(nums.length==0){
            return 0;
        }
 
        const uniqEle=new Set();
        for(let i=0;i<nums.length;i++){
            uniqEle.add(nums[i]);
        }

        let count =0;
        for(const ele of uniqEle){
            if(uniqEle.has(ele-1) ) continue;

            let current=ele;
            let len=1;
            while(uniqEle.has(current+1)){
                len++;
                current++;
                count=Math.max(len,count);
            }
        }

        return Math.max(count,1); 
    }
}
