class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const merged = matrix.reduce((prev, next) => [...prev,...next], []);
        return merged.indexOf(target) !== -1;
    }
}
