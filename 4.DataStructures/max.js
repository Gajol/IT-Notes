// max.js
// https://eloquentjavascript.net/code/chapter/04_data.js

function max (...numbers) {
  maxNumber = -Infinity
  for (let number of numbers) {
    if (number > maxNumber) maxNumber = number
  }
  return maxNumber
}

console.log ("Max of 1, 2, 3, 4: " + max(1, 2, 3, 4))
console.log ("Max of 1, 20, 3, 4: " + max(1, 20, 3, 4))
