function findSequence(target) {

  function findTarget(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      // overshot target
      return null;
    } else {
      return (findTarget(current + 5, `(${history} + 5)`)  ||
              findTarget(current * 3, `(${history} * 3)`) );
    }
  }
  return findTarget (1, "1");
}
console.log (findSequence(24));


function findSolution(target) {
  function find(current, history) {
    if (current == target) {
    return history;
    } else if (current > target) {
  	  return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
