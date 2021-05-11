// Array Reverse

function reverseArray ( array, inPlace = false) {
  newArray = []
  size = array.length
  for (i = 0; i < size; i++) {
    newArray.push(array[size-1-i])
  }
  return inPlace ? newArray : (array = newArray)
}

function reverseArrayInPlace( array ) {
  /* reverse array from outside in, stopping when indexes
     meet in the middle (odd lenght will match)
  */
  var left = 0
  var right = array.length - 1
  placeHolder = []
  while (left < right) {
    placeHolder.push(array[left])
    array[left] = array[right]
    array[right] = placeHolder.pop()
    left++
    right--
  }
  /* books solution
    function reverseArrayInPlace(array) {
      for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
      }
      return array;
    }
  */
}


mixedBag = []
mixedBag = ["Hello", 1, "There", 2, "Doing Well?"]
reverseArrayInPlace(mixedBag)
console.log(mixedBag)


let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue)
console.log(arrayValue)


reversedBag = reverseArray(mixedBag)
console.log (reversedBag)
console.log (mixedBag)
console.log ()

reversedBag = reverseArray(mixedBag, true)
console.log (reversedBag)
console.log (mixedBag)
console.log ()
