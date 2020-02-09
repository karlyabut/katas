function zeroToCenter(arr) {
  let newArray = [];
  for (let i of arr) {
    if (i !== 0) {
      newArray.push(i);
    }
  }
  newArray.splice(Math.floor(arr.length / 2), 0, 0);
  return newArray;
}

console.log(zeroToCenter([1, 1, 3, 1])); //[ 1, 1, 0, 3, 1 ]
