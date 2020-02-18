function rot13(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rot13Array = [];
  for (let i of str) {
    let subIndex = alphabet.indexOf(i) + 39;
    if (subIndex > alphabet.length) {
      subIndex -= alphabet.length;
    } else {
      subIndex = alphabet.indexOf(i) + 13;
    }

    if (alphabet.includes(i)) {
      rot13Array.push(alphabet[subIndex]);
    } else {
      rot13Array.push(i);
    }
  }
  return rot13Array.join('');
}

console.log(rot13('This is my first ROT13 excercise'));
