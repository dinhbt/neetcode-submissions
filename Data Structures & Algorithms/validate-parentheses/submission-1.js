class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0) return false;

        const brackets = [];
        const openBracket = {'(': ')', '{':'}', '[': ']'};

        for (const char of s) {
            if (openBracket[char]) {
                brackets.push(char);
            } else {
                const current = brackets.pop();
                if (openBracket[current] !== char) {
                    return false;
                }
            }
        }

        return  brackets.length  === 0;
    }
}
