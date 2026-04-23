class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)  return false;
        let sumS = 0, sumT = 0;

        for ( let i = 0; i < s.length; i++ ) {
            const charAtS = s[i].charCodeAt();
            const charAtT = t[i].charCodeAt();

            sumS += charAtS;
            sumT += charAtT;
        }

        return sumS === sumT;
    }

    isAnagram(s, t) {
       const sortS = s.split('').sort().join();
       const sortT = t.split('').sort().join();

       return sortS === sortT;
    }
}
