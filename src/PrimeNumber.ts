// Problem - Given a natural number 'n', determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

// Input - IsPrime(5)
// Output - true

// Big O Guide:
// Calcualtion not dependent on input size - O(1)
// 1 loop - O(n)
// 2 loops - O(n^2)
// Input size reduced by half - O(log n)

// Big O Notation - O(n)

// NOTE: My Solution and Video Solution
function IsPrime(n: number) {
  if (n < 2) {
    console.log('is NOT prime');
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log('is NOT prime - loop');
      return false;
    }
  }

  console.log('is prime - default');
  return true;
}

IsPrime(15);
