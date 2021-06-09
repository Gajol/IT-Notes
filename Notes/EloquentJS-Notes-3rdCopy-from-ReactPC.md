


# Code Sandbox
[Eloquent JavaScript Sandbox](https://eloquentjavascript.net/code/)

# JavaScript Terms

## Array
Array Methods
:
- `pop()` : remove last element
- `push()` : add an element at the end (could also use *a[a.length]=x*)
- `shift()` : removes first element of array
- `unshift()` : adds an element at beginning of array
- `spice(index, noremove, elements)`: adds elements to array at index after removing "noremove" elements.  Example, `a.splice(0, 1)` removes the first element of an array.
- `concat()` : a.concat(b) joins b to a.
- `slice(index)` : slice an array into another array
- ??`'forEach'` : `["A", "B"].forEach(l => console.log(l));`
- `filter` : `array.filter( a => a.property == 'value')``

### Array Methods Examples
- [MDN Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

  ```JS
  // 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer));
  // expected output: 10

  // 5 + 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer, 5));
  // expected output: 15
  ```

Array Objects
- `delete a[0]` : deletes object in array at index 0.  a[0] is now undefined.

## Data Structures
Undefined
: A variable that has not been assigned a value has the value undefined. ([MDN Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures))
Flow Control
: [MDN Flow Control](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

Equality Operators
: `===` Thiso perator behaves identically to the equality operator except no type conversion is done, and the types must be the same to be considered equal.
([StakeOverflow Equal](https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons))([C-Point JS Comparison Tutorial](https://www.c-point.com/javascript_tutorial/jsgrpComparison.htm)).`==` The == operator compares objects by identity.

Functions - Parameters
: parameters are mutable.  There is no way to make them constants [StackOverflow JS Parameters](https://stackoverflow.com/questions/30314457/how-to-make-function-parameter-constant-in-javascript)

Immutable
: numbers, strings, and Booleans, are all immutable—it
is impossible to change values of those types. You *can* change the properties of object, causing a single
object value to have different content at different times.

Let & Const
: Even though number values don’t change, you can
use a let binding to keep track of a changing number by changing the value
the binding points at. Similarly, though a const binding to an object can itself
not be changed and will continue to point at the same object, the contents of
that object might change.
```JS
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};
```

Property
: A JavaScript property is a characteristic of an object, often describing attributes associated with a data structure.  There are two kinds of properties: Instance properties hold data that are specific to a given object instance. Static properties hold data that are shared among all object instances.

Checking Property Programmatically
: use the `property name in object`
```JS
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
```

Pure function
: A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change. A pure
function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else). A call to such a function can be substituted by its return value without changing the
meaning of the code.

Structs in JavaScript
: ([StackOverflow Structs & JS](https://stackoverflow.com/questions/502366/structs-in-javascript))

Tenary Operator
: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator   
isMember ? '$2.00' : '$10.00'

String Loops
: str.length, str.charAt(x), str[x], "for of" in ES6 `for (let letter of text)`,  for ...in `for (let i in str)`
```js
// for ... of ...
for (let char of "Hello") {
  console.log(char);
}
```
