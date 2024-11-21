// console.log('===================-----------Welcome to data structure-----------====================')

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.head == null
    }
          
    size(){
        return this.size
    }

    //==============================    To prepend(first) the nodes in linkedlist   ==============================

    prepend(val){
             let node =new Node(val)
        if(this.isEmpty()){
             this.head=node
        }else{
            node.next = this.head;
            this.head=node;
        }
         this.size++;
    }

    //========================              To append(last) the  linkedlist       ============================

     append(val){
         let node = new Node(val)
         if(this.isEmpty()){
            this.head=node;
         }else{
            let pointer = this.head;
            while(pointer.next !== null){
             pointer = pointer.next
            }
            pointer.next = node;
         }
         this.size++
     }

 //========================To remove duplicates from  the  linkedlist===============

     removeduplicate() {
        let slow = this.head; 
        
        while ( slow.next !== null) {
            let fast = slow;
            while (fast.next !== null) {
                if (slow.value === fast.next.value) {
                    fast.next = fast.next.next;
                    this.size--;
                } else {
                    fast = fast.next;
                }
            }
            slow = slow.next;
        }
    }


    //==========================   for delete the linkedlist  =========================

    Deletenode(val){

        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }

        if (this.head.value === val) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let pointer = this.head;
        while(pointer.next !== null){
         if( pointer.next.value == val){
            pointer.next = pointer.next.next;
            this.size--
            return;
         }
         pointer = pointer.next;
       }
       console.log('No value found')
    }

    // =========================   for inserting the nodes at position   ========================

    insertAtPosition(val, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }
        
        let node = new Node(val);
        if (position === 0) {
            node.next = this.head;
            this.head = node;
            return
        }
            let pointer = this.head;
            let count = 0;
            while (count < position - 1) {
                pointer = pointer.next;
                count++;
            }
            node.next = pointer.next;
            pointer.next= node
            
          this.size++;
    }

    // ======================  for searching  the value  ======================

    search(val) {
        let pointer = this.head;
        let index = 0;
        while (pointer !== null) {
            if (pointer.value === val) {
                return index    
            }
            pointer = pointer.next;
            index++;
        } 
        return 'Value not found';
    }

    //========================= for reverse the value  =========================


    reverse() {
        let prev = null;
        let current = this.head;
        while (current !== null) {
            let next = current.next;  
            current.next = prev;      
            prev = current;           
            current = next;
        }
        this.head = prev;
    }
 
    //========================To convert an array to a linked list===============
   
        fromArray(arr) {
            for (let val of arr) {
                this.append(val);
            }
        }

    // =====================for printing the linkedlist=======================
    
    print(){
        let pointer = this.head;
        while(pointer !== null){
            console.log(pointer.value)
            pointer = pointer.next;
        }
    }

    //=======================remove nth from last (little complicated but easy) =====================

      removeNth(n) {
 
      if(n>this.size){
        return 'value not found'
      }

      let node= new Node()
      node.next=this.head
      let fast =node 
      let slow =node
      for(let i=0;i<=n;i++){
        fast= fast.next
      }

      while(fast !== null){
        fast =fast.next;
        slow =slow.next
      }
     
      slow.next=slow.next.next;
      this.head=node.next;
      this.size--

   }

}

const  Linkedlist = new LinkedList()
// Linkedlist.append(1)
// Linkedlist.append(2)
// Linkedlist.append(3)
// Linkedlist.append(4)
// Linkedlist.append(5)
// Linkedlist.append(6)
// Linkedlist.append(7)
// Linkedlist.append(8)
// Linkedlist.append(9)
// Linkedlist.append(9)
// Linkedlist.append(4)
// Linkedlist.append(1)
// Linkedlist.append(3)
// 

// Linkedlist.search(6)
// Linkedlist.insertAtPosition(10,4)

// Linkedlist.print()
// Linkedlist.removeduplicate()
// Linkedlist.removeNth(1)
// Linkedlist.fromArray([1,2,3,4,5])
// Linkedlist.Deletenode(1)
Linkedlist.print()



