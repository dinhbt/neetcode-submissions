class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const map = new Map();
       let result = false;

       nums.forEach((item) => {
        const key = `${item}`;
        const value = (map.get(key) || 0) + 1;
        if (value > 1) {result = true;}
        map.set(key, value);
       });

    return result;
    }
}
