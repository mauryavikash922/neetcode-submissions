class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(arr) {
        let s;
        let isValid=true;
        // valid col
        for(let i=0;i<9;i++){
            s=new Set()
            for(let j=0;j<9;j++){
                if(s.has(arr[i][j])){
                    isValid=false;
                    return isValid;
                }
                if(arr[i][j]!=="."){

                s.add(arr[i][j])
                }
            }
        }

    for(let i=0;i<9;i++){
            s=new Set()
            for(let j=0;j<9;j++){
                if(s.has(arr[j][i])){
                    isValid=false;
                    return isValid;
                }
                if(arr[j][i]!=="."){

                s.add(arr[j][i])
                }
            }
        }



    for (let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            s=new Set()
                for (let k=0;k<3;k++){
        for(let l=0;l<3;l++){
            const el=arr[i*3+k][j*3+l];
            if(s.has(el)){
                isValid=false
                return isValid 
            }
            if(el!=="."){

            s.add(el)
            }
        }
    }
        }
    }

    return isValid
    }
}
