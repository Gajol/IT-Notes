// investigate properties
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

// define an Object
let myObject = {
  x: 0,
  y: 0,
  z: 0
}

// define a better Object
let personObject = {
  name: "Doug Nielsen",
  age: 53,
  gender: "Male",
  profession: "Software Developer",
  "Career Goal": "Make $$$"
}

console.log(Object.keys(myObject));
console.log(Object.keys(personObject))

let objectA = { a: 1, b: 2 }
Object.assign (objectA, { b: 3, c: 4 })
console.log (objectA)
// -> Object { a: 1, b: 3, c: 4 }

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};
// -> Uncaught TypeError: invalid assignment to const 'score'

// using 'let' allows you change the object tmpscore points
// TODO: What happened to the space occupied by the first object?
let tmpscore = {visitors: 0, home: 0};
// This is okay
tmpscore.visitors = 1;
// This isn't allowed
tmpscore = {visitors: 1, home: 1};
