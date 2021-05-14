// 3. Functions Excercises - Bean counting

function countChar(a, matchChar) {
  let countChar = 0
  for (let l of a) {
    if (l == matchChar) {
      countChar++
    }
  }
  return countChar

  /*
  // basic looping not using iterator
  for (n=0; n < a.length; n++) {
      if (a[n] === matchChar) {
        countChar++
      }
  }
  */
}

function countBs (a) {
  return countChar(a, "B")
}
console.log ("3 B's I hope: " + countBs ("Big Bad Bob"))
console.log ("4 B's I hope: " + countBs ("Big Bad BoB"))
