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

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }

    return null;
  }

  print() {
    console.log(this.items.toString());
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
cars.print();
