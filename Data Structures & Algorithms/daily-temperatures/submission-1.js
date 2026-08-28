class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(arr) {
        const n= arr.length;
        const result= new Array(n).fill(0);
        const s=[n-1];
        for(let i=n-2;i>=0;i--){
            while( s.length>0 && arr[i]>=arr[s[s.length-1]]){
                s.pop();
            }

            if(s.length){
                result[i]=s[s.length-1]-i;
            }

            s.push(i);
        }

        return result;

    }
}
