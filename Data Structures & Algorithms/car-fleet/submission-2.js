class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // target: 10 - 1 = 9 / 3 = 3;
        //         10 - 4 = 6 / 2 = 3;

        const sizes = position.length;

        const times = position.map((a, i) => ({pos: a, time: (target - a) / speed[i]})).sort((a,b) => b.pos - a.pos);
        let max = 0, result = 0;

        for (let it of times) {
            if (it.time > max) {
                max = it.time;
                result++;
            }
        }

        return result;
    }
}
