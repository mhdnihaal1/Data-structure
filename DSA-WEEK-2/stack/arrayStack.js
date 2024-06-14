class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // Return the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Print the stack
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage:
let stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.size()); // 3
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.printStack()); // 10 20
