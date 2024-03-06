// Problem - Given an array of integers, sort the array

// Input Data - const arr = [-6, 20, 8, -2, 4];
// Input - BubbleSort(arr)
// Output - [-6, -2, 4, 8, 20]

// Insertion Sort Concept
// Virtually split the array into a sorted and unsorted part
// Assume that the first element is already sorted and remaining elements are unsorted
// Select an unsorted element and compare with all elements in the sorted part
// If the elements in the sorted part are smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
// Insert the selected element at the correct index
// Repeat until all the unsorted elements are placed in the right order

// Big O Guide:
// Calculation not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n^2)

// NOTE: Video Solution
function InsertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let sortedElemIndex = i - 1;

    while (sortedElemIndex >= 0 && arr[sortedElemIndex] > numberToInsert) {
      arr[sortedElemIndex + 1] = arr[sortedElemIndex];
      sortedElemIndex = sortedElemIndex - 1;
    }

    arr[sortedElemIndex + 1] = numberToInsert;
  }
}

const arr = [-6, 20, 8, -2, 4];
InsertionSort(arr);
console.log('arr', arr);
