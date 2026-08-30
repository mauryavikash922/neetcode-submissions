class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    getPos(idx,row,col){
        return{
            i:Math.floor((idx)/col),
            j:Math.floor((idx)%col  )
        }
    }
    searchMatrix(matrix, target) {
        const m=matrix.length;
        const n=matrix[0].length;
        let l=0;
        let e=m*n-1;

        while(l<=e){
            const mid=Math.floor((l+e)/2);
            const {i,j}=this.getPos(mid,m,n);
            console.log("mid",mid,`i:${i},j:${j}`)

            if(matrix[i][j]==target){
                return true
            }else if(matrix[i][j]<target){
                l=mid+1;
            }else{
                e=mid-1;
            }
        }

        return false ;
    }
}
