
const power = (base, exponent) => {
  result = 1
  for (count = 0; count < exponent; count++) {
    result *= base
  }
  return result
}

console.log("2^8: " + power(2,8))

/*
When there is only one parameter name, you can omit the parentheses
around the parameter list. If the body is a single expression, rather than a
block in braces, that expression will be returned from the function.
*/
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
