// Problem - Given a number 'n', find the n'th element of the Fibonacci sequence
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

// Input - FibonacciSequence(6)
// Output - 8

// Notes:
// loop through n
//

// Big O Guide:
// Calculation not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n)

// NOTE: My Solution
// function FibonacciSequenceRecursion(n: number) {
//   let arr = [0, 1];

//   if (n === 0) {
//     console.log('return 0');
//     return arr[0];
//   }

//   if (n === 1) {
//     console.log('return 1');
//     return arr[1];
//   }

//   for (let i = 1; i < n; i++) {
//     const lastArrItem = arr[arr.length - 1];
//     const secondToLastArrItem = arr[arr.length - 2];
//     arr.push(lastArrItem + secondToLastArrItem);
//   }

//   console.log('result', arr[arr.length - 1]);
//   return arr[arr.length - 1];
// }

// FibonacciSequenceRecursion(4);

// NOTE: Video Solution
// Big O Notation - O(2^n)
function FibonacciSequenceRecursion(n: number): number {
  if (n < 2) {
    return n;
  }
  return FibonacciSequenceRecursion(n - 1) + FibonacciSequenceRecursion(n - 2);
}

console.log(FibonacciSequenceRecursion(0)); // 0
console.log(FibonacciSequenceRecursion(1)); // 1
console.log(FibonacciSequenceRecursion(6)); // 8
console.log(FibonacciSequenceRecursion(7)); // 13
