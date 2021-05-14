console.log(String(6).padStart(3, "0"));
// → 006

// bad, as you get an extra ", " due to trailing whitespace
console.log("a b c d e f ".split(" ").join(", "))

console.log("a b c d e f ".trim().split(" ").join(", "))

// repeating string
let chant = "Hi Ho "
verse = chant.repeat(10)
console.log(verse)