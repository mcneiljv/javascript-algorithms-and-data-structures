// Problem - Given a number 'n', find the first 'n' elements of the Fibonacci sequence
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

// Input - FibonacciSequence(6)
// Output - [0, 1, 1, 2, 3, 5]

// Notes:
// find last element in arr
// push element into arr

// Big O Guide:
// Calcualtion not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n)

// NOTE: My Solution
function FibonacciSequence(n: number): number[] {
  let arr: number[] = [];
  let num = n;

  while (num > 0) {
    const lastArrNum = arr[arr.length - 1];
    const secondToLastArrNum = arr[arr.length - 2];

    if (!lastArrNum) {
      arr.push(0);
    }

    if (!secondToLastArrNum) {
      arr.push(1);
    }

    if (lastArrNum && secondToLastArrNum) {
      arr.push(lastArrNum + secondToLastArrNum);
    }

    --num;
  }

  console.log('arr', arr);

  return arr;
}

FibonacciSequence(38);

// NOTE: Video Solution
// function fibonacci(n: number) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   console.log('fib', fib);

//   return fib;
// }

// fibonacci(2);
