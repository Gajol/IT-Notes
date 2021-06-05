// EloquentJS 4. Data Structures excercises
// https://eloquentjavascript.net/code/

// TODO: Can you say const function ???
// TODO: https://medium.com/imdoneio/the-imdone-pitch-feedback-welcome-386430accf01
function range (start,end) {
  // return array of numbers from start to End
  // python myList = list(range(1, 101))

  // TODO: Cleaner way to create an array with one element
  let array = []
  array[0] = start

  // risk of off-by-one
  index = 1;
  value = start + 1;
  while (value <= end) {
    /*  TODO:  This didn't work, but I thought it was legal.
       array[index] = start + index
    */
    array.push(value)
    value++
  }
  return array;
}

console.log(range(2,5))
