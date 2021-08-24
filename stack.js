class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  peek() {
    return this.top;
  };

  push(value) {
    let n = new Node(value);
    if (this.length === 0) {
      this.bottom = n;
      this.top = n;
    } else {
      const holdingPointer = this.top;
      this.top = n;
      this.top.next = holdingPointer
    }
    this.length ++;
    return this;
  };

  pop() {
    if (!this.top) {
      return null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    if (this.length === 1) {
      this.bottom = null;  
    }
    this.length --;
    return holdingPointer.value;
  };

}

const stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');
console.log('stack', stack.pop());
console.log('stack', stack);
