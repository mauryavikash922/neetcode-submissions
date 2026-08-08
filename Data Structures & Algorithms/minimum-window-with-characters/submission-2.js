class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    hasFound(map) {
        return !Array.from(map).filter(item => item[1] != 0).length
    }
    minWindow(s, t) {
        const map = new Map();
        for (let i = 0; i < t.length; i++) {
            if (!map.has(t[i])) {
                map.set(t[i], 1)
            } else {
                map.set(t[i], map.get(t[i]) + 1)
            }
        }

        let l = 0;
        let r = 0;
        let minLen = Infinity;
        let index = { l: -1, r: -1 }

        const windowMap = new Map();
        let have = 0;
        const need =map.size

        while (l <= r && r < s.length) {
            if (windowMap.has(s[r])) {
                windowMap.set(s[r], windowMap.get(s[r]) + 1);
            } else {
                windowMap.set(s[r], 1);
            }

            if (map.has(s[r]) && map.get(s[r]) == windowMap.get(s[r])) {
                have += 1;
            }

            while (have == need) {
                if ((r - l + 1) < minLen) {
                    index.l = l;
                    index.r = r;
                    minLen = r - l + 1;
                }

                windowMap.set(s[l], windowMap.get(s[l]) - 1);
                if (map.has(s[l]) && map.get(s[l]) > windowMap.get(s[l])) {
                    have -= 1;
                }
                l++;
            }

            r++;


        }

        if (index.l == -1) {
            return ""
        }

        return s.slice(index.l, index.r + 1)

    }
}
