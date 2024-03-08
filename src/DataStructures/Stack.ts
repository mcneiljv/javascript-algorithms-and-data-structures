// @ts-nocheck
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    if (this.items.length == 0) {
      return null;
    }

    return this.items[this.items.length - 1];
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const cars = new Stack();

cars.push('Honda');
cars.push('Toyota');
cars.push('Mazda');

console.log(cars.pop());
console.log(cars);
console.log(cars.getSize());
console.log(cars.peek());
