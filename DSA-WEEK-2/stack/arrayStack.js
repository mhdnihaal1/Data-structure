class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

//============================delete specific node from the stack=====================

    delete(value) {
        const tempStack = new Stack();
        let found = false;

        while (!this.isEmpty()) { 
            const poppedValue = this.pop();
            if (poppedValue === value) {
                found = true;
                break;
            } else {
                tempStack.push(poppedValue);
            }
        }

        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }

        if (!found) {
            console.log(`Value ${value} not found in the stack.`);
        }
    }

    //===========================================

    

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

let stack = new Stack();
console.log(stack.isEmpty()); 
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());


//======================reverse the String Using Stack =========================

function reverseStringUsingStack(str) {
    const stack = new Stack();

    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}