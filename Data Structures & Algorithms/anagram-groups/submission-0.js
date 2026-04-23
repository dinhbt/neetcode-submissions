class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        const strSort = (str) => str.split('').sort().join('');

        for (let i = 0; i < strs.length; i++) {
            const key = strSort(strs[i]);
            const value = map.get(key) || [];
            map.set(key, [...value, strs[i]]);
        }

        const result = [];
        map.forEach((val) => result.push(val));

        return result;
    }
}
