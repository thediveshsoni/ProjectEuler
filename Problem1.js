/*
Problem 1: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(number) {
  let temp = 1;
  let sum = 0;
  while (temp < number) {
    temp % 3 == 0 ? sum += temp : temp % 5 == 0 ? sum += temp: '';
    temp++;
  }
  return sum;
}

multiplesOf3and5(1000);
