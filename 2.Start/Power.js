// power
const power= function(base, exponent){

  let result = 1
  for (count = 0; count < exponent; count++) {
    result *= base
  }
  return result
}
console.log ("2^10: " + power(2,10))
console.log ("3^4: " + power(3,4))
