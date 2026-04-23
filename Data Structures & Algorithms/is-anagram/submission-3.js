class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const toArrayStringAndSort = (s) => s.split('').sort();
        return toArrayStringAndSort(s).join('') === toArrayStringAndSort(t).join('');
    }
}
