// @ts-nocheck
const LinkedListWithTail = require('./LinkedListWithTail');

class LinkedListQueue {
  constructor() {
    this.list = new LinkedListWithTail();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
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
    return this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log('empty: ', queue.isEmpty());
queue.enqueue(30);
queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(5);
queue.dequeue();
console.log('peek: ', queue.peek());
queue.print();
console.log('size: ', queue.getSize());
