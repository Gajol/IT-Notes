// 3. Functions Excercises - Bean counting

function countChar(a, matchChar) {
  let countChar = 0
  for (n=0; n < a.length; n++) {
      if (a[n] === matchChar) {
        countChar++
      }
  }
  return countChar
}

function countBs (a) {
  return countChar(a, "B")
}
console.log ("3 B's I hope: " + countBs ("Big Bad Bob"))
console.log ("4 B's I hope: " + countBs ("Big Bad BoB"))
