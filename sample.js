insertionatposition(p,v){
    let node = new Node(v)
    if(p <0 && p > this.size){
        return 'invalid p'
    }

    if(p === 0){
        node.next = this.head
        this.head =node
        return
    }

    let pointer = this.head;
   let count =0;
    while(count < p-1){
      pointer= pointer.next
      count++
    }
    node.next = pointer.next;
    pointer.next=node
    this.size++


    

}