class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(arr) {
        // to get max area formed by ith element is (nse@i-pse@i-1)* arr[i]

        let s=[];
        const n= arr.length;
        const nse=new Array(n).fill(n);
        const pse=new Array(n).fill(-1);
        for(let i=n-1;i>=0;i--){
            while(s.length && arr[i]<=arr[s[s.length-1]]){
                s.pop();
            }
            if(s.length){
                nse[i]=s[s.length-1];
            }
            s.push(i);
        }
        s=[]
         for(let i=0;i<n;i++){
            while(s.length && arr[i]<=arr[s[s.length-1]]){
                s.pop();
            }
            if(s.length){
                pse[i]=s[s.length-1];
            }
            s.push(i);
        }
        let area=0;
        for(let i=0;i<n;i++){
            const curr_area=arr[i] * (nse[i]-pse[i]-1);
            area=Math.max(area,curr_area);
        }

        console.log(pse,nse)

        return area;
    }
}
