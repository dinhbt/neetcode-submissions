class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */ 
    encode(strs) {
        // Hello: 72, 101, 108, 108, 111
        // 23333,#72101108108111

        if (strs.length === 0) return '';

        let prefix = [], subfix = [];

        for (let word of strs) {
            if (word !== '') {
                let wordSize = 0;
                let trail = '';
                while (wordSize < word.length) {
                    const charCode = word[wordSize].charCodeAt();
                    trail = `${trail}${String(charCode).length}`;

                    subfix.push(charCode);
                    wordSize = wordSize + 1;
                    if (wordSize === word.length) {
                        prefix.push(trail);
                    }
                }
            } else {
                prefix.push(1);
                subfix.push(0);
            }
        }

        return prefix.join(',') + "#" + subfix.join('');

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') return [];

        //prefix:  1234,55763
        //subfix:  123455763
        const [prefix, subfix] = str.split('#');
        const prfixs = prefix.split(',');

        const result = [] ;
        let start = 0;

        for (let i = 0; i < prfixs.length; i++) {
            const trails = prfixs[i];
            let len = 0;
            let join = '';

            while (len <= trails.length - 1) {
                const trail = start === 0 ? trails[len]: start + Number(trails[len]);
                const numOf = subfix.slice(start, trail);
                start = Number(trail);
                const val = numOf === '0' ? "" : String.fromCharCode(Number(numOf));
                join = join + val;

                len++;

                if (len === trails.length) {
                    result.push(join);
                }

              
            }
        }

        return result;
    }
}
