class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = new Set();
        const sorted = nums.sort((a,b) => a-b);
        for (let i = 0; i < sorted.length; i++) {
            for(let j = i+1; j < sorted.length; j++) {
                for(let k = j+1; k < sorted.length; k++) {
                    if (sorted[i] + sorted[j] + sorted[k] === 0) {
                        res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                    }
                }
            }
        }

        return Array.from(res).map((item) => JSON.parse(item));
    }
}
