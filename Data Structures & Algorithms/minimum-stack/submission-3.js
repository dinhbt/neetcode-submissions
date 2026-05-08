class MinStack {
    stack =[];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push({ val: val, min: val });
        } else {
            const last = this.stack[this.stack.length - 1];
            const min = Math.min(last.min, val);
            this.stack.push({ val: val, min });
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const size = this.stack.length - 1;
        return this.stack[size].val;
    }

    /**
     * @return {number}
     */
    getMin() {    
        const size = this.stack.length - 1;
        return  this.stack[size].min;
    }
}
