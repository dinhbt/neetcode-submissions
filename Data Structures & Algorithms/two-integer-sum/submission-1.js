class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length < 1) return [];
        
        let result = [];
        for(let i = 0; i < nums.length; i++) {
            const minus = target - nums[i];
            const index = nums.indexOf(minus);
            if (index !== -1 && i !== index) {
                result[0] = i;
                result[1] = index;
                return result;
            }
        }
        return result;
    }
}
