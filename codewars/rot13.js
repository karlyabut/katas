function rot13(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const rot13Array = [];
  for (let i of str.toLowerCase()) {
    let subIndex = alphabet.indexOf(i) + 13;
    if (subIndex > alphabet.length) {
      subIndex -= alphabet.length;
    }
    if (i !== ' ') {
      rot13Array.push(alphabet[subIndex]);
    } else {
      rot13Array.push(i);
    }
  }
  console.log(rot13Array.join(''));
}

console.log(rot13('This is my first ROT13 excercise'));
