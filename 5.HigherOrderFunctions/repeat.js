function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
let labels = [];

repeat(5, j => { labels.push(`Unit ${j + 1}`); });

console.log (labels)


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
