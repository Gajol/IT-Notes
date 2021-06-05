function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1


// breaking it down - adding console log steps for visiblity
console.log ("step 1")
typeof noisy
// >> "function"

console.log ("step 2")
typeof noisy(Math.min)
// >> "function"

console.log ("step 3")
const noisyFunction = noisy(Math.min)
// So that you can call it like a regular function:

console.log ("step 4")
noisyFunction(1,2,3)

/*
  Result: shows the function is not called until step 4!!!
  https://stackoverflow.com/questions/50003830/can-someone-explain-this-higher-order-javascript-function-confusing-syntax

step 1
step 2
step 3
step 4
calling with [ 1, 2, 3 ]
called with [ 1, 2, 3 ] , returned 1  <= where Math.min is actually called.

*/
