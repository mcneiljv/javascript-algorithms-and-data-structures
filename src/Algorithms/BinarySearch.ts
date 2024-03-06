// Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Input - BinarySearch([-5, 2, 10, 4, 6], 2)
// Output - 1

// Notes:
// If the array is empty, return -1 as the element cannot be found
// If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.
// If target is less than the middle element, binary search the left half of the array
// If the target is greater than the middle element, binary search the right half of the array

// Big O Guide:
// Calcualtion not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(log n)

// NOTE: Video Solution
function BinarySearch(arr: number[], t: number) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (t === arr[middleIndex]) {
      return middleIndex;
    }

    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(BinarySearch([], 100)); // -1
// BinarySearch([-5, 2, 4, 6, 10, 11, 13], 10); // 4
console.log(BinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(BinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(BinarySearch([-5, 2, 4, 6, 10], 20)); // -1
