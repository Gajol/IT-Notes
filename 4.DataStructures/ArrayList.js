// Chapter 4. Array Lists
// https://eloquentjavascript.net/code/#4.2

function addValue (list, value) {
  let newList = {
    value: value,
    rest: null
  }
  list.rest = newList
  return list.rest
}

// book's answer
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}


/*
function arrayToList (array) {
  let list = {
    value : null,
    rest : null // null vs undefined
  }
  // bad since this changes the original array
  // for (i = 0; i < array.length; i++)  {
  arraySize = array.length
  for (i = 0; i < arraySize; i++)  {
      // shift array onto Lists
      addValue(list.rest, array.pop())
  }
  return list
}

*/
function printList(List) {
  console.log ("\n\n")
  let element = 0
  let rest = true
  //while ( rest != undefined) {
  while ( value = nth(List, element) ) {
    value = nth(List, element)
    console.log (value)
    element++
  }
}

let numbersArray = []
numbersArray = [1, 2, 3, 4, 5, 6, 7]

let mixedArray = []
mixedArray = [1, "Second", 3, "Fourth"]


// only displays first few objects in array
console.log (arrayToList(numbersArray))
djnList = arrayToList(numbersArray)

console.log ("\n\n")
let element = 0
let rest = true
//while ( rest != undefined) {
while ( value = nth(djnList, element) ) {
  value = nth(djnList, element)
  console.log (value)
  element++
}

mixedList = arrayToList(mixedArray)
console.log ("Print list")
printList (mixedList)
