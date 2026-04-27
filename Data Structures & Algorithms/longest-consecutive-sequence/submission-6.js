class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const sorted = nums.sort((a, b) => a - b);
        let current = 1, max = 1;

        for (let i = 0; i < sorted.length; i++) {
            if (nums[i] === nums[i+1]) {  
                continue;
            }

            if (sorted[i+1] - 1 === sorted[i]) {
               current++;
               max = Math.max(current, max);
            }

            if (sorted[i+1] - 1 !== sorted[i]) {
                current = 1;
            }
        }

        return Math.max(current, max);
    }
}
