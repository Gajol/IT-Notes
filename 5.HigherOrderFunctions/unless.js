// show using a function as a parameter to
// influence call flow/Control

function unless (test, then) {
  if (!test) then()
}

  // output even numbers by checking not add "unless odd then..."

  for (i=0; i < 10; i++) {
    // wrong - no need to pass 'i' into function.
    //         it is already in-scope of the function
    // unless ( i % 2 === 1, (i) => {
    unless ( i % 2 === 1, () => {
      console.log(i)
    })
  }

// book used repeat for Loops

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

let x = [];
x = ["A", "B", "C"]

/*
let i = 0;
x.forEach (n => {
  console.log("element in n:", n, " i:", i++)
})
// -> ReferenceError: i is not defined
*/
//   let i = 0;
x.forEach ((n, i=0) => {
  console.log("element in n:", n, " i:", i++)
})
// → element in n: A  i: 0
// → element in n: B  i: 1
// → element in n: C  i: 2
