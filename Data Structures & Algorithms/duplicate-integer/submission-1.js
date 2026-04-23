class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dup = false;
        const map = new Map();

        nums.forEach(item => {
            const key = item.toString();
            if (map.has(key)){ 
                dup = true;
            } else {
                map.set(key, item);
            }
        });

        return dup;
    }
}
