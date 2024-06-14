class Queue{

    constructor(){
        this.items = [];
    }


Enqueue(elem){
    this.items.push(elem)
}

Dequeue(){
    return this.items.shift()
}

isEmpty(){
    return this.items.lenght === 0;
}

peek(){
    if(!this.isEmpty()){
        return this.items[0]
    }
}

size(){
    return this.items.length
}

print(){
    console.log(this.items.toString())
}
}

const queue = new Queue()


queue.Enqueue(11)
queue.Enqueue(12)
queue.Enqueue(13)
queue.Enqueue(14)
queue.Enqueue(15)
console.log(queue.size())


// console.log(queue.Dequeue())
console.log(queue.peek())
queue.print()