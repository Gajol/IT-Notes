// SCRIPT file @ https://eloquentjavascript.net/code/#5
require('./scripts.js')

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(SCRIPTS.map(s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", ...]
console.log(SCRIPTS.length)  // 139
console.log(rtlScripts.map(s => s.name).length)  // 28
console.log("\n")

// chain filter & map together
let chainRtlScripts = SCRIPTS.filter(s => s.direction == "rtl").
    map(s => s.name)
//console.log(chainRtlScripts);
console.log(chainRtlScripts.length)  // 28


// works on a single array element of SCRIPTS
// for this element, it calculates the sum of the numbers
// ranges in script.range array
/*
  {
    name: "Ahom",
    ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
  },
*/
function characterCount(script) {

  // see mDN reduce docn.  reduce
  /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    Arrow function
    reduce((accumulator, currentValue) => { ... } )
    currentValue is the 2nd parameter, in this case [from, to]
  */
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// reduces SCRIPTS Array (all elements in SCRIPTS)
console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
