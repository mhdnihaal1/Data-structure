class Node{
    constructor(value){
      this.value = value
      this.prev = null
      this.next = null
    }
  }
  
  class doublyLinkedList{
    constructor(){
      this.head = null
      this.tail = null
      this.size = 0
    }

    isEmpty(){
      return this.head == null
  }

  size(){
      return this.size
  }
  
  append(value){
    let node =new Node(value)
    if(this.isEmpty()){
      this.head=node;
      this.tail=node
    }else{
      this.tail.next=node;
      node.prev=this.tail;
      this.tail=node
    }
  }
  
   prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.size++
   }
  
   printForward(){
    let current = this.head
    while(current){
      console.log(current.value);
      current = current.next
    }
   }
  
   printBackward(){
    let current = this.tail
    while(current){
      console.log(current.value);
      current = current.prev
    }
   }
  
  //  insertAt(index , value ){
  //   if(index < 0 || index > this.size){
  //     return 'enter a valid index'
  //   }
  //   if(index === 0 ){
  //     this.prepend(value)
  //   }else if(index === this.size ){  m
  //     this.append(value)
  //   }else{
  //     let prevInd = this.head
  //     for(let i = 0 ; i < index - 1 ; i++){
  //       prevInd = prevInd.next
  //     }
  //     const newNode = new Node(value)
  //     newNode.next = prevInd.next
  //     prevInd.next.prev = newNode
  //     prev.next = newNode
  //     newNode.prev = prevInd
      
  //   }
  //  }
  }
  
  
    const DLL = new doublyLinkedList()
    DLL.append(99)
    DLL.append(22)
    DLL.append(45)
    // DLL.prepend('prepended 33')
  
    // DLL.insertAt(2,100)
    // DLL.insertAt(2,11)
  
    DLL.printForward()
    // DLL.printBackward()