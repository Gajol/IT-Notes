function power(base, exponent) {
  // recursion
  // call power with -1 until it is 0 and then returns
  if (exponent == 1) {
    return 1;
  }
  return base * power(base, exponent -1)
}

console.log ("2^8: " + power(2,8))
