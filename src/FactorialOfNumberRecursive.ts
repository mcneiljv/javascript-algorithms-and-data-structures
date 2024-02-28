// Problem - Given an integer 'n', find the factorial of that integer
// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

// Input - FactorialOfNumberRecursive(5)
// Output - 120

// Notes:
//

// Big O Guide:
// Calculation not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n)

// NOTE: Video Solution
function FactorialOfNumberRecursive(n: number) {
  if (n === 0) {
    return 1;
  }
  return n * FactorialOfNumberRecursive(n - 1);
}

FactorialOfNumberRecursive(0); // 1
FactorialOfNumberRecursive(1); // 1
FactorialOfNumberRecursive(5); // 120
