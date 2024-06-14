class Queue {
    constructor() { 
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    Enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    Dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty() {
        return this.rear - this.front === 0;
    }

    // Returns the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }

    size() {
        return this.rear - this.front;
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.Enqueue(10);
queue.Enqueue(20);
queue.Enqueue(30);
queue.Enqueue(40);
queue.Enqueue(50);

console.log(queue.size()); 

queue.print(); 
console.log(queue.Dequeue()); 
queue.print(); 
