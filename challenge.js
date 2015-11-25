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
  var currentRow = "x, " + numbers.join(", ");
  console.log(currentRow);
  for (var n of numbers) {
    currentRow = n + ", ";
    for (var i = 0; i < numbers.length; i++)
      currentRow += n * numbers[i] + ", ";
    console.log(currentRow.slice(0, currentRow.length-2));
  }
}

printMultiplicationTable( nPrimes(10) )
