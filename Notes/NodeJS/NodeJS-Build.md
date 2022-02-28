# NodeJS build

## First Tries doing EloquentJS Book Chpt5
https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files

```JS
// tools.js
// ========
module.exports = {
  foo: function () {
    // whatever
  },
  bar: function () {
    // whatever
  }
};

var zemba = function () {
}

// And in your app file:

// app.js
// ======
var tools = require('./tools');
console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar); // => 'function'
console.log(typeof tools.zemba); // => undefined
```

### Export variable
https://stackoverflow.com/questions/3922994/share-variables-between-files-in-node-js
```JS
// module.js
var name = "foobar";
// export it
exports.name = name;

Then, in main.js...

//main.js
// get a reference to your required module
var myModule = require('./module');

// name is a member of myModule due to the export above
var name = myModule.name;

```
