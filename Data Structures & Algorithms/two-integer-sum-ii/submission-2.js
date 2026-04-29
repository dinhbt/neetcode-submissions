class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();

        for (let i = 0; i < numbers.length; i++) {
            const mvalue = target - numbers[i];
            const val = map.get(mvalue);
            
            if (val) return [val, i + 1];
            map.set(numbers[i], i + 1)
        }

    }
}
