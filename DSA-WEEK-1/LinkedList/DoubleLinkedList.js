class Node {
  constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
  }
}
 
class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  isEmpty() {
      return this.head == null;
  }

  getSize() {
      return this.size;
  }

  append(value) {
      let node = new Node(value);
      if (this.isEmpty()) {
          this.head = node;
          this.tail = node;
      } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
      }
      this.size++;
  }

  prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
          this.head = node;
          this.tail = node;
      } else {
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
      }
      this.size++;
  }

  printForward() {
      let current = this.head;
      while (current) {
          console.log(current.value);
          current = current.next;
      }
  }

  printBackward() {
      let current = this.tail;
      while (current) {
          console.log(current.value);
          current = current.prev;
      }
  }

  insertAt(index, value) {
      if (index < 0 || index > this.size) {
          return 'Enter a valid index';
      }
      if (index === 0) {
          this.prepend(value);
      } else if (index === this.size) {
          this.append(value);
      } else {
          let pointer = this.head;
          for (let i = 0; i < index - 1; i++) {
              pointer = pointer.next;
          }
          const node = new Node(value);
          node.next = pointer.next;
          node.prev = pointer;
          pointer.next.prev = node;
          pointer.next = node;
          this.size++;
      }
   }
}

// Testing the doubly linked list implementation
const DLL = new DoublyLinkedList();
DLL.append(99);
DLL.append(22);
DLL.append(45);
// DLL.prepend('prepended 33');

// console.log('Inserting at index 2:');
DLL.insertAt(2, 100);
DLL.insertAt(2, 11);

// console.log('Print Forward:');
DLL.printForward();
// console.log('Print Backward:');
// DLL.printBackward();
// console.log('Size of the list:', DLL.getSize());
