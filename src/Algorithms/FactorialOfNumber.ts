// Problem - Given an integer 'n', find the factorial of that integer
// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

// Input - FactorialOfNumber(5)
// Output - 120

// Notes:
//

// Big O Guide:
// Calcualtion not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n)

// NOTE: My Solution
function FactorialOfNumber(n: number) {
  let arr: number[] = [];
  let num = n;
  let factorial: number = 1;

  while (num > 0) {
    arr.push(num);

    let previousNum = arr[arr.length - 1];

    if (previousNum) {
      factorial = factorial * previousNum;
    }

    --num;
  }

  console.log('factorial', factorial);
  return factorial;
}

FactorialOfNumber(8);

// NOTE: Video Solution
// function factorial(n: number) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }

//   console.log('result', result);
//   return result;
// }

// factorial(8);
