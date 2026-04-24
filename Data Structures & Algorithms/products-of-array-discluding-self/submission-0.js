class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            let j = nums.length - 1;
            let temp = 1;
            while (j >= 0) {
                if (j !== i) {
                    temp = temp * nums[j];
                }

                j--; 
                if (j < 0) {
                 result[i] = temp;
                }
            }
        }

        return result;
    }
}
/**
 * 0 -> [1,2,3]
 * 1 -> [0,2,3]
 * 2 -> [0,1,3]
 * 3 -> [0,1,2]
 */