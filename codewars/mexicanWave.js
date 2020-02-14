function wave(str) {
  // Code here
  const array = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      array.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return array;
}
