class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max=0;
        let left=0;
        let right=heights.length-1;
        while(left<right){
            const width=right-left;
            max=Math.max(max,width*Math.min(heights[left],heights[right]));
            if(heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return max;
    }
}
