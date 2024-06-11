class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class LinkedList{

    constructor(){
        this.head=null;
        this.size=0
    }

    isEmpty(){
        return this.head == null;
    }

    size(){
        return this.size;
    }

    append(val){
        let node = new Node(val);
        if(this.isEmpty()){
            this.head=node;
        }else{
        let pointer= this.head;
        while(pointer.next !== null){
           pointer= pointer.next
        }
        pointer.next = node;
    }
    this.size++
  }

  prepend(val){
    let node = new Node(val)
    if(this.isEmpty()){
        this.head=node
    }else{
        node.next=this.head;
        this.head=node
    }
    this.size++
  } 

   print(){
    let pointer = this.head;
    while(pointer !== null){
        console.log(pointer.value)
        pointer= pointer.next
    }
   }

   removeduplicate(){
    let slow = this.head;
    while(slow.next !== null){
        let fast = slow;
        while(fast.next !== null){
            if(slow.value == fast.next.value){
                fast.next = fast.next.next
                this.size--
            }
         fast= fast.next
        }
        slow= slow.next
    }

   }

   delete(val){
    if(this.isEmpty){
        return 'linkedlist is empty'
    }

    if(this.head.value ==val){
        this.head = this.head.next;
        this.size--
        return
    }

    let pointer = this.head;
    while(pointer !== null){
        if(pointer.value == val){
            pointer.next=pointer.next.next;
            this.size--
        }
        pointer = pointer.next
        return
    }
    console.log('no value found')
   }


   insertat(){

   }

}
const  Linkedlist = new LinkedList()

Linkedlist.append(1)
Linkedlist.append(2)
Linkedlist.append(3)
Linkedlist.prepend(4)
Linkedlist.prepend(5)

// Linkedlist.removeduplicate()

Linkedlist.print()