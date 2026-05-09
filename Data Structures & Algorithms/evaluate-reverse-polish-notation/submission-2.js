class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const opers = ['+', '-', '*',  '/'];
        let stack = [];

        for (const item of tokens) {
            if (!opers.includes(item)) {
                stack.push(Number(item));
            } else {
                const b = stack.pop();
                const a = stack.pop();

                switch(item) {
                    case '+': stack.push(a + b); break;
                    case '-': stack.push(a - b); break;
                    case '*': stack.push(a * b); break;
                    case '/': stack.push(Math.trunc(a / b)); break;
                }
            }
        }
        return stack[0];
    }
}
