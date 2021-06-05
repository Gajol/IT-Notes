require('./scripts.js')
// SCRIPT file @ https://eloquentjavascript.net/code/#5

// make it a pure function by not affecting the parameters/
// arguments
function map (array, action) {

  // would only do an action, and would not update any array
  // array.forEach( element => action(element))

  mappedArray = [];
  // loop through array (can I not use forEach())
  for (let element of array ) {
    mappedArray.push(action(element))
  }
  return mappedArray;
}

let x = []
x = [1, 2, 3, 4, 5]

y = map(x, (x) => x * 5)
console.log (x)
console.log (y)
// -> [ 1, 2, 3, 4, 5 ]
// -> [ 5, 10, 15, 20, 25 ]

y = map(x, x => x * 5)
console.log (x)
console.log (y)
// -> [ 1, 2, 3, 4, 5 ]
// -> [ 5, 10, 15, 20, 25 ]

y = map(x, () => x * 5)  // <== wrong Syntax since "x" is Undefined
console.log (x)
console.log (y)
// -> [ 1, 2, 3, 4, 5 ]
// -> [ NaN, NaN, NaN, NaN, NaN ]


let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", ...]
