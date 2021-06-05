require('./scripts.js')

// SCRIPT file @ https://eloquentjavascript.net/code/#5

// filter function from book (showing how JS .filter is done)
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    // console.log ("Element: ", element)
    // console.log ("test(element): ", test(element), "\n")
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));

// JS filter aray method
console.log(SCRIPTS.filter(s => s.direction == "ttb"));
