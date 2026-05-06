class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const length = height.length;

        if (length === 0) return 0;

        const leftMax = new Array(length);
        const rightMax = new Array(length);
        let total = 0;

        leftMax[0] = height[0];
        for (let i = 1; i < length - 1; i++) {
            leftMax[i] = Math.max(height[i], leftMax[i-1]);
        }

        rightMax[length - 1] = height[length - 1];
        for (let i = length - 2; i >= 0; i--) {
            rightMax[i] = Math.max(height[i], rightMax[i + 1]);
        }

        for (let i = 0; i < length - 1; i++) {
            total = total + (Math.min(leftMax[i], rightMax[i]) - height[i]);
        }

        return total;
    }
}
