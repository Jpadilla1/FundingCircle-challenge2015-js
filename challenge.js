'use strict';

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

var nPrimes = function(N) {
  var primes = [2];
  var currentNumber = 3;
  while (primes.length < N) {
    if (isPrime(currentNumber))
      primes.push(currentNumber);
    currentNumber += 2;
  }
  return primes;
}

var printMultiplicationTable = function(numbers) {
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
