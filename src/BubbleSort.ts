// Problem - Given an array of integers, sort the array

// Input Data - const arr = [-6, 20, 8, -2, 4];
// Input - BubbleSort(arr)
// Output - [-6, -2, 4, 8, 20]

// Bubble Sort Concept
// Compare adjacent elements in the array and swap the positions if they are not in the intended order
// Repeat as you step through each element in the array
// Once you step through the whole array with no swaps, the array is sorted

// Notes:
// if currNum is less than previousNum, we want to remove the

// Big O Guide:
// Calcualtion not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n^2)

// NOTE: Video Solution
function BubbleSort(arr: number[]) {
  let sorted: boolean;

  do {
    sorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        sorted = true;
      }
    }
  } while (sorted);
}

const arr = [-6, 20, 8, -2, 4];
BubbleSort(arr);
console.log('arr');
console.log('arr', arr);
