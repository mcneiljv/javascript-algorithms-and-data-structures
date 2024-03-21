// @ts-nocheck
const LinkedListWithTail = require('./LinkedListWithTail');

class LinkedListStack {
  constructor() {
    this.list = new LinkedListWithTail();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const stack = new LinkedListStack();
console.log('empty', stack.isEmpty());
stack.push('hello');
stack.push('bonjour');
stack.push('hallo');
stack.pop();
console.log('size', stack.getSize());

stack.print();
console.log('stack.peek()', stack.peek());
