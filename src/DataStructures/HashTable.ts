// Time complexity:
// Overall - O(1) - Because this is a hash table, the average time complexity is what is considered.
// Best Case - O(1)
// Worst Case - O(n) due to using find. However with hash tables the collision is very minimal.
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
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      // item[0] just looks at the item key
      const sameKeyItem = bucket.find((item: string) => item[0] === key);
      if (sameKeyItem) {
        // updates the item with the same key to the current passed in value
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key: string) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item: string) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return 'The given key does not exist.';
  }

  remove(key: string) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item: string) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
    return 'The given key does not exist.';
  }
  // [["name": "Spike"], ["mane": "Spiegel"]]

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
// Does NOT cause collision due to 'name' and 'mane' having the same set of letters
table.set('mane', 'Spiegle');
table.display();
console.log('name: ', table.get('name'));
table.remove('age');
table.set('name', 'Spock');
table.display();
