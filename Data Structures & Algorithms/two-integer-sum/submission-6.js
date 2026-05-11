class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
   twoSum(nums, target) {
        let subArray = [...nums];
        for (let i = 0; i < nums.length; i++) {
            subArray.shift();
            const fval = target - nums[i];
            const index = subArray.indexOf(fval);

            if (index !== -1) {
                return [i, index + i + 1];
            }

        }
    }
}
