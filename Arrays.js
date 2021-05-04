// Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let fruits = ['Orange', 'Banana']
console.log (fruits.length)

let first = fruits[0]
let second = fruits[1]

fruits.forEach(function(item, index,array) {
  console.log (item,index, array.length)
})

fruits.push('Pineapple')
fruits.push('Pear')
newLength = fruits.push('Apple')
console.log ("Array length " + newLength + ".  Length " + fruits.length)

// pop - LIFO
console.log ("array.pop() - LIFO: " + fruits.pop())

// shift - FIFO
console.log ("array.shirt() - FIFO: " + fruits.shift())

// unshift - jump Queue
console.log ("array.unshift() - Jump Queue " + fruits.unshift('Strawberry'))

// PSUH - LIFO
console.log ("array.push() - LIFO push onto stack " + fruits.push('Mango'))

displayFruits(fruits)

console.log ("fruits.indexOf('Pineapple') - Pineapple @ position: " + fruits.indexOf('Pineapple'))
console.log ("fruits.indexOf('Not in Array') - Not in array position (returns -1): " + fruits.indexOf('xxxx'))

console.log("fruits.slice(3, 1) - remove one item @ pos=3 : " + fruits.splice(3,1))

console.log("Copy an array using slice() - shallow copy - does not clone referenced values")
alsoFruits = fruits.slice()
displayFruits(alsoFruits)
displayFruits(fruits)


console.log("keys for fruits[] array - Object.keys(alsoFruits)) - returns array of keys: " + Object.keys(alsoFruits))
// odd why this printout to console is in array form "["0", "1", "2", "3"]"
console.log(Object.keys(fruits))



function displayFruits (fruitArray) {
	fruitArray.forEach(function(item, index,array) {
  	console.log (item,index, array.length)
	})
}
