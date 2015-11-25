var assert = require('assert');
var challenge = require('../challenge');

describe('isPrime', function() {
  it('should return true when number is prime.', function () {
    assert.equal(true, challenge.isPrime(3));
    assert.equal(false, challenge.isPrime(10));
    assert.equal(true, challenge.isPrime(7));
    assert.equal(false, challenge.isPrime(568));
    assert.equal(true, challenge.isPrime(17));
  });
});

describe('nPrimes', function() {
  it('should return a N length array with valid prime numbers.', function() {
    var rand = Math.floor((Math.random() * 1000) + 1);
    var primes = challenge.nPrimes(rand);
    assert.equal(rand, primes.length);

    primes.forEach(function(prime) {
      assert.equal(true, challenge.isPrime(prime));
    });

  });
});
