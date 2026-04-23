class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let i = 0; i < nums.length; i ++) {
            const value = map.get(nums[i]);

            if (value) {
                map.set(nums[i], value + 1);
            } else {
                map.set(nums[i], 1);
            }
        }

        const sorted = [...map.entries()].sort((a,b) => b[1] - a[1]).slice(0,k).map(it => it[0]);
 
        return sorted;
    }
}
