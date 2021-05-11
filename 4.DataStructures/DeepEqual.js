// Chapter 4. excercises
// deepEqual
/*
Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual .
== : compares object identity
=== : to find out if values should be compared
typeof : to see if their properities should be compared
Object.keys to go over properities
*/
function deepEqual ( a, b ) {

  // a or b are null
  if ((a == NULL) && (b == NULL)) return true
  if ((b == NULL) || (b == NULL)) return false

  // a or b are objects
  sizeA = Object.keys(a).length;
  sizeB = Object.keys(b).length;
  if (sizeA != sizeB) return false;

  for (let aKey of Object.keys(a)) {
    //  if aKey = bKey
  //  if ( typeof(a[aKey]) == Object ) {
  //    // check b is object, then recurse
  //    deepEqual (a[aKey])
  //  } else {
  // (a[aKey] != Object.keys[b]) return false;
  }

}


var obj = {
    name: "Simon",
    age: "20",
    clothing: {
        style: "simple",
        hipster: false
    }
}

for(var propt in obj){
    console.log(propt + ': ' + obj[propt] + ' type: '
      + typeof(obj[propt]));

}

sizeA = Object.keys(obj).length
console.log("Size: " + sizeA)
for (let aKey of Object.keys(obj)) {
    console.log(aKey, obj[aKey]);
}


// book's answer
/* logic is:
    1. compare values (with casting) a===
    2. both a & b must be Objects  (plus NULL logic for typeof issue)
    3. a & b must have the same number of keys
    4. for each key in () => {
        b must have this key && deepEqual (a[key], b[key]) is true
       } 

*/
function deepEqual(a, b) {
  // if (a === b) return true;
  // the === compares the values (no type conversion!!!)
  if (a === b) {
    console.log ("=== matched: " + a)
    return true;
  }

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let objBook = {here: {is: "an"}, object: 2};
console.log(deepEqual(objBook, objBook));
// → true
console.log(deepEqual(objBook, {here: 1, object: 2}));
// → false
console.log(deepEqual(objBook, {here: {is: "an"}, object: 2}));
// → true
