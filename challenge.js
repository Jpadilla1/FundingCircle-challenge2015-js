'use strict';

// Checks if the given number is a Prime.
var isPrime = function(number) {
  if (number === 2)
    return true;
  else if (number % 2 === 0)
    return false;
  else {
    var squareRoot = parseInt(Math.sqrt(number));
    var currentNumber = 3;
    while (currentNumber <= squareRoot) {
      if (number % currentNumber === 0)
        return false;
      currentNumber += 2;
    }
    return true;
  }
}

// Generates the first N Primes.
var nPrimes = function(N) {
  if (N <= 0) return [];
  var primes = [2];
  var currentNumber = 3;
  while (primes.length < N) {
    if (isPrime(currentNumber))
      primes.push(currentNumber);
    currentNumber += 2;
  }
  return primes;
}

// Prints a multiplication table of an array of numbers.
var printMultiplicationTable = function(numbers) {
  if (numbers.length === 0)
    return;
  var currentRow = 'x, ' + numbers.join(', ');
  console.log(currentRow);
  numbers.forEach(function(n) {
    currentRow = n + ', ' + numbers.map(function(num) {
      return num * n;
    }).join(', ');
    console.log(currentRow);
  });
}

printMultiplicationTable( nPrimes(10) )

module.exports = {
  'isPrime': isPrime,
  'nPrimes': nPrimes,
  'printMultiplicationTable': printMultiplicationTable
};
