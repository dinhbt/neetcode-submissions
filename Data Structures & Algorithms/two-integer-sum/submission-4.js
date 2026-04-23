class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       for (let i = 0; i < nums.length; i++) {
        const numNeedFind = target - nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                if (numNeedFind === nums[j]) {
                    return [i, j];
                }
            }
       }
    }

    twoSumS2(nums, target) {
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
