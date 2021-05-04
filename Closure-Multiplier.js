// clossure multiplier

function multiplier (factor) {
  // number is a local variable which is returned, and not defined
  // until found - closure.  
  // Not sure if this is correct understanding
  return number => number * factor
}

let twice = multiplier(2)
console.log(twice(5))
