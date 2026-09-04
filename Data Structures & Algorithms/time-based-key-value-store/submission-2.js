class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push([timestamp, value])
        } else {
            this.keyStore.set(key, [[timestamp, value]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) { 
        if(this.keyStore.has(key)){
            const arr= this.keyStore.get(key);
            let l=0,r=arr.length-1;
            let idx =r;
            while(l<=r){
                const m=Math.floor((l+r)/2)
                idx=Math.min(idx,m);

                if(arr[m][0]==timestamp){
                    idx=m;
                    break;
                }else if (arr[m][0]>timestamp){
                    if(timestamp<arr[l][0]){
                        idx=l-1;
                        break;
                    }else{

                    r=m-1;
                    }
                }else{
                    if(timestamp>arr[r][0]){
                        idx=r;
                        break;
                    }else{

                    l=m+1;
                    }
                }
            }
            
            if(idx!=-1){
                return arr[idx][1];
            }
            return ""
        }

        return "";
    }
}
