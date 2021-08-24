class Stack {
  constructor() {
    this.array = [];
  }
  
  peek() {
    return this.array[this.array.length - 1];
  };

  push(value) {
    this.array.push(value);
    return this;
  };

  pop() {
    this.array.pop();
    return this;
  };

}

const stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');
console.log('stack', stack);
console.log('stack', stack.pop());
