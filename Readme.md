# Funding Circle - Coding Challenge 2015

Same problem in [https://github.com/Jpadilla1/FundingCircle-challenge2015](https://github.com/Jpadilla1/FundingCircle-challenge2015) , but done in JavaScript ES5.

## Overview

The problem is to generate N first primes and generate their multiplication table. To determine is a number is prime, the algorithm will first check if it is an even number. If true, then the number is not a prime. If false, then calculate the square root of the number and check every odd number lower than the root starting at the number 3.

## Complexity

How fast does it run? Does it scale?

- This problems run in O(n^2) time. O(n) by getting the first N primes and the second O(n) is by checking all the remaining possible factors of the current number. Therefore, the time complexity in Big O Notation is O(n^2).

- The implementation scales up to a 16bit prime integer (65,535). After that number, it is recommended to use a probabilistic thereom to determine the next N primes.

## Installing

1. Clone this repo
2. Have the latest Node installed
3. Run the project `node challenge.js`

## Runinng tests

1. Install mocha `npm install`
2. Run the tests `mocha`