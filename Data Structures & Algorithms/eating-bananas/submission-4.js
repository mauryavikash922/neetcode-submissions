class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    getTime(arr, k) {
        return arr.reduce((acc, val) => {
            return acc + Math.ceil(val / k)
        }, 0);
    }
    minEatingSpeed(piles, h) {
        const m = Math.max(...piles);

        let l = 1, r = m;
        let min = m;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            const time = this.getTime(piles, mid);

            if (time > h) {
                l = mid + 1;
            } else {
                min = mid
                r = mid - 1
            }
        }

        return min;
    }
}
