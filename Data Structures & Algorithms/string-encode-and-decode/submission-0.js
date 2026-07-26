class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc,curr)=>{
            const len=curr.length;
            const enc=`[${len}]${curr}`
            return acc+enc;
        },"")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let j=0;
        const result=[]
        while(i<=j && j<str.length){
            if(str[j]==']'){
                const len=+str.slice(i+1,j);
                result.push(str.slice(j+1,j+len+1));
                i=j+len+1;
                j=i;

            }else{
                j++;
            }
        }

        return result
    }
}
