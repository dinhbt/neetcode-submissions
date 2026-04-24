class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = Array(nums.length).fill(1);
        const right = Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            left[i] = left[i] * nums[i-1] * left[i-1];
        }

        for (let j = nums.length - 2; j >= 0; j--) {
            right[j] = nums[j+1] * right[j] *right[j+1];
            left[j] = right[j] * left[j];
        }

        return left;

    }
}
/*
0 1  
1 1     
2 2 6   
3 8 
*/