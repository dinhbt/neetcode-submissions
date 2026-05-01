class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left = 0, right = heights.length - 1;

        while (left < right) {
            const space = right - left;
            const minbar = Math.min(heights[left], heights[right]);

            max = Math.max(max, space * minbar);

            if (heights[left] <  heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
