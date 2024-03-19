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

  removeByIndex(index) {
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

  removeByValue(value) {
    let removedNode;
    if (this.isEmpty()) {
      return console.log('List is empty');
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return console.log('Value not found in list');
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return console.log('List is empty');
    }
    let curr = this.head;
    let i = 0;
    while (curr && curr.value !== value) {
      curr = curr.next;
      i++;
    }
    if (curr) {
      return console.log(`Search value is at ${i} index`);
    }
    return console.log('Search value not found');
  }

  reverse() {
    if (this.isEmpty()) {
      return console.log('List is empty');
    }
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
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
list.reverse();
// list.removeByIndex(1);
list.search(25);
// list.removeByValue(25);
list.print();

console.log('List is empty', list.isEmpty());
console.log('List size', list.getSize());
