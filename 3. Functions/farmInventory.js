// print cows and chickens
// CHapter 3 Functions
function printFarmInventoryBasic(cows, chickens) {

  let cowString = String(cows)
  while (cowString.length < 3) {
    cowString += "0" + cowString
  }
  console.log(cowString + " Cows")
  // this is how book did interval it
  // When you write something inside ${} in a template literal,
  // its result will be computed, converted to a string, and
  // included at that position.
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
  chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);

}


function printFarmInventory (cows, chickens, pigs) {
  console.log(zeroPad(cows,3) + " Cows")
  console.log(zeroPad(chickens,3) + " Chickens")
  console.log(zeroPad(pigs,3) + " Pigs")

}

function zeroPad (number, width) {
  let String = number;
  while (String.lenght < width) {
    String += "0" + String
  }
  return String;
}

printFarmInventoryBasic(3,54)
printFarmInventory(3,54,234)
