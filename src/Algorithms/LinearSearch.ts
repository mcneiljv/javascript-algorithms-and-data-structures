// Problem - Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Input - LinearSearch([-5, 2, 10, 4, 6], 2)
// Output - 1

// Notes:
//

// Big O Guide:
// Calcualtion not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n)

// NOTE: My Solution (video solution was the same)
function LinearSearch(arr: number[], t: number) {
  // NOTE: Solution using indexOf
  // Big O Notation - O(n)
  //   return arr.indexOf(t);

  for (const item of arr) {
    if (arr[item] === t) {
      return item;
    }
  }

  return -1;
}

console.log(LinearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(LinearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(LinearSearch([-5, 2, 10, 4, 6], 20)); // -1
