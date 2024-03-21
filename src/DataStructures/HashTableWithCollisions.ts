class HashTable {
  table: any[];
  size: number;

  constructor(size: number) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key: string) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key: string, value: string | number) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key: string) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key: string) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set('name', 'Spike');
table.set('age', 27);
table.set('occupation', 'Bounty Hunter');
table.display();
// Causes collision due to 'name' and 'mane' having the same set of letters
table.set('mane', 'Spiegle');
console.log('name: ', table.get('name'));

table.remove('age');
table.display();
