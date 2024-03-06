const set = new Set([1, 2, 3]);
// if you try to add a duplicate value (for example 3) the add func will not work
set.add(4);
set.delete(3);
// set.clear();

console.log('size', set.size);
console.log('has', set.has(2));

for (const item of set) {
  console.log('item', item);
}
