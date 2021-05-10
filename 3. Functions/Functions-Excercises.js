// Chapter 3 - Functions Excercises

function findMin (a, b) {
  return (a < b) ? a : b
}
console.log (findMin (30,50))

function isEven (a) {

  // must check for negative numbers since without it,
  // there will be infinite recursion (fails with
  // much recursion)  (fails with too much recusion)
  a = Math.abs(a)
  if (a === 0) {
    return true;
  }
  if (a === 1) {
    return false;
  }
  return isEven (a-2)
}
// prints "Twelve is True"
console.log ("Twelve is " + (isEven(12) ? "True" : "False"))
console.log ("Thirteen is " + (isEven(13) ? "True" : "False"))
console.log ("-1 is " + (isEven(-1) ? "True" : "False"))
console.log ("-2 is " + (isEven(-1) ? "True" : "False"))


// prints True; ?? why does it not print "Twelve is" ??
console.log ("Twelve is " + isEven(12) ? "True" : "False")
// tried + ${isEven...} - failed with:
  // Uncaught SyntaxError: missing ) after argument list
  // console.log ("Twelve is " + ${isEven(12) ? "True" : "False"})
  // Uncaught SyntaxError: missing ) after argument list
  // console.log ("Twelve is " + ${(isEven(12) ? "True" : "False")})
