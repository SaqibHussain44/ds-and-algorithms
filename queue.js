class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  };
  
  peek() {
    return this.first;
  };

  enqueue(value) {
    const n = new Node(value);
    if (this.length === 0) {
      this.first = n;
      this.last = n;
    } else {
      this.last.next = n;
      this.last = n;
    }
    this.length++;
    return this;
  };

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length --;
    return holdingPointer;
  };

}

const queue = new Queue();
queue.enqueue('Joy');
queue.enqueue('Matt');
queue.enqueue('Samir');
queue.enqueue('Pavel');
queue.dequeue();
// queue.dequeue();
console.log(queue.peek())
