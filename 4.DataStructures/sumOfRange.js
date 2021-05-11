// EloquentJS 4. Data Structures excercises

// TODO: Can you say const function ???
// TODO: https://medium.com/imdoneio/the-imdone-pitch-feedback-welcome-386430accf01
function range (start,end, stepBy = 1) {
  // return array of numbers from start to End
  // python myList = list(range(1, 101))

  array = []
  value = start
  const increment = Math.abs(stepBy) * ( start < end ? 1 : -1 )

  // for loop seems easier
  for (index  = 0; index <= Math.abs((start-end)/increment); index++) {
    array.push(value)
    value += increment
  }
  return array;
}


function sum(...Numbers) {
  result = 0
  for (let number of Numbers) {
    result += number
    console.log ("number: ", number)
  }
  return result
}

console.log("forwards " + range(2,5))
console.log("backwards " + range(5,2))
console.log("negative " + range(-5,-2))
console.log("negative  by 2's " + range(-25,-2, 2))
// negative stepBy does not make sense, but treat as absolute
console.log("negative  by -2's " + range(-25,-2, -2),"\n")

let numbersArray = [1,2,3,4,5,6,7]

// WRONG: Result "01,2,3,4,5,6,7" 0 sum treats as string and result is a +=
// 0 + ,2,3,4,5,6,7 as a string -> "01,2,3,4,5,6,7"
console.log("   sum(numbersArray): " + sum(numbersArray),"\n\n")

/*
You can use a similar three-dot notation to call a function with an array of
arguments.
*/
// Correct:  28
console.log("   sum(...numbersArray): ", sum(...numbersArray),"\n\n")  // result is [ 1 ]

// Correct:  28
console.log("   sum 1..7: ", sum(1,2,3,4,5,6,7),"\n\n")

// WRONG: Results in String "01234567"
console.log("   sum 1..7 as array: ", sum([1],[2],[3],[4],[5],[6],[7]))
/*
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/
