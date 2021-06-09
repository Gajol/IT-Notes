// try to build reduce functions
// see also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function reduce (array, combine, start) {
  reducedTo = start;
  for (let element of array) {
    reducedTo = combine(reducedTo, element);
  }
  return reducedTo;
}

// using forEach to loop through array
function reduce2 (array, combine, start) {
  reducedTo = start;

  array.forEach ( (element) => {
    reducedTo = combine(reducedTo, element);
  })
  return reducedTo;
}

let x = {}
x = [1, 2, 3, 4];
console.log (reduce(x, (a, b) => a + b, 0) );
console.log (reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log (reduce2(x, (a, b) => a + b, 0) );


// using rduce() methods in JS language
console.log([1, 2, 3, 4].reduce((a, b) => a + b));


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
MDNvalue = [0, 1, 2, 3, 4, 5].reduce(function(accumulator, currentValue,
                                currentIndex, array) {
    console.log ("value:", currentValue, "index:", currentIndex,
        "accumulator before calculation:", accumulator  );
    return accumulator + currentValue
})
console.log("MDNvalue:", MDNvalue)
