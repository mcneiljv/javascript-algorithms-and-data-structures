// @ts-nocheck
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1) - Constant
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // O(n) - Linear
  // NOTE: It is possible to append an item in O(1) time by using head and rear pointers
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return 'Invalid index';
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    let removedNode;
    if (this.isEmpty()) {
      return console.log('List is empty');
    }
    if (index < 0 || index >= this.size) {
      return console.log('Invalid index');
    }
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.head;
      let listValues = '';
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log('List values:', listValues);
    }
  }
}

const list = new LinkedList();
list.append(10);
list.print();
list.append(20);
list.print();
list.append(30);
list.print();
list.insert(25, 2);
list.print();
list.remove(1);
list.print();

console.log('List is empty', list.isEmpty());
console.log('List size', list.getSize());
