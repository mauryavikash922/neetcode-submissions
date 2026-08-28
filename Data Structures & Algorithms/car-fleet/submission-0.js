class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const arr = position.map((item, index) => [item, speed[index]]).sort((a, b) => { return a[0] - b[0] }).map(item => {
            return (target - item[0]) / item[1]
        });
        const n = position.length;
        const s = [];
        for (let i = n - 1; i >= 0; i--) {
            s.push(arr[i]);
            if(s.length>=2 && s[s.length-1]<=s[s.length-2]){
                s.pop()
            }
        }


        return s.length;

    }
}
