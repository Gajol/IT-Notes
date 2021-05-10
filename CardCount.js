//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards
// Card count
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--
      break;
    default:
      break;
  }
  if ( count > 0) {
    //console.log (count + " Bet")
    return count + " Bet"

  } else {
    //console.log (count + " Hold")
    return count + " Hold"
  }

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
/*
// Only change code below this line
var regex = /[JQKA]/;
if (card > 1 && card < 7) {
  count++;
} else if (card === 10 || regex.test(card)) {
  count--;
}
*/
