class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i=0;
        let j=numbers.length-1;

        while(i<j && i<numbers.length && j>=0){
            const sum=numbers[i]+numbers[j];
            if(sum==target){
                return [i+1,j+1];
            }else if(sum>target){
                j--;
            }else{
                i++
            }

        }

        return [i+1,j+2];
    }
}
