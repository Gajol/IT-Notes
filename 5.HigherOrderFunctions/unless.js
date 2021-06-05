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
