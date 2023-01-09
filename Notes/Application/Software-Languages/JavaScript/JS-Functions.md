
## Currying
: Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument. Here's an example in JavaScript:
[StackOVerflow - Fucntion Currying](https://stackoverflow.com/questions/36314/what-is-currying)
```JS
function add (a) {
  return function (b) {
    return a + b;
  }
}
```
