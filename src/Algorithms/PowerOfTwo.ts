// Problem - Given a positive integer 'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer 'x' such that 'n' = 2^x

// Input - PowerOfTwo(2)
// Output - true

// Notes:
//

// Big O Guide:
// Calculation not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n)

// NOTE: My Solution
// function PowerOfTwo(n: number): boolean {
//   if (n < 0) {
//     console.log('is negative - false');
//     return false;
//   }

//   for (let i = 0; i < n; i++) {
//     if (Math.pow(2, i) === n) {
//       console.log('is pow of 2');
//       return true;
//     }
//   }

//   console.log('is NOT pow of 2');
//   return false;
// }

// Big O Notation - O(log n) because input is reduced by half each iteration
// NOTE: Video Solution
// function PowerOfTwo(n: number): boolean {
//   if (n < 1) {
//     console.log('is negative - false');
//     return false;
//   }

//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }

//     n = n / 2;
//   }

//   return true;
// }

// Big O Notation - O(1) because calculation not dependent on input size
// NOTE: Video Solution #2 - BEST SOLUTION
function PowerOfTwoBitWise(n: number) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

PowerOfTwoBitWise(256);
