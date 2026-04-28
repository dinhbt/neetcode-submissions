class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s || s === '') return false;

        const replaceSpace = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const length = replaceSpace.length;
        let i = 0, j = length - 1;
        let result = true;

        while (i < j) {
            if (replaceSpace[i] !== replaceSpace[j]) {
                result = false;
            }
            i++;
            j--;
        }

        return result;
    }
}
