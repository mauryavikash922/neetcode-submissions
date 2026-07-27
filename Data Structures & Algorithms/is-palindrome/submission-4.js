class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char){

        const code=char.charCodeAt(0);
        return (code >= 65 && code<=90) || (code >=48 && code <=57) || (code >=97 && code<=122 ) 
    }
    isPalindrome(s) {
        let i=0;
        let j=s.length-1;


        while(i<j && i<s.length && j>=0){
            if(!this.isAlphanumeric(s[i])){
                i++;
                continue
            }
            if(!this.isAlphanumeric(s[j])){
                j--;
                continue
            }
            console.log(`${i},${j}: [${s[i]}] [${s[j]}]`)
            if(i>=j || j<0 || i>=s.length){
                break;
            }
            if(s[i].toLowerCase()!=s[j].toLowerCase()){
                return false;
            }else{
                i++;
                j--;
            }
            
        }

        return true;
    }
}
