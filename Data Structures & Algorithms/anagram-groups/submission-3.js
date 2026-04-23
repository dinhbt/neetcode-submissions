class Solution {
    keyCodes(s) {
        return s.split('').sort().join();
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let i = 0; i < strs.length; i++) {
            const key = this.keyCodes(strs[i]);

            const existed = map.has(key);

            if (existed) {
                let data = map.get(key);
                map.set(key, [...data, strs[i]]);
            } else {
                map.set(key, [strs[i]]);
            }
        }
        
        return [...map.values()];
    }
}
