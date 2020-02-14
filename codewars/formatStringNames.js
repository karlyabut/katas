function list(names) {
  //your code here
  if (names.length === 0) {
    return '';
  }
  const nameArray = [];

  let str = '';
  for (let x of names) {
    nameArray.push(x.name);
  }
  if (names.length === 2) {
    str = nameArray.join(' & ');
  } else if (names.length > 2) {
    nameArray.splice(-2);
    str =
      nameArray.join(', ') +
      ', ' +
      names[names.length - 2].name +
      ' & ' +
      names[names.length - 1].name;
  } else {
    str = nameArray.join('');
  }
  return str;
}

//Examples:
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// returns 'Bart, Lisa & Maggie'

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
// returns 'Bart & Lisa'

console.log(list([{ name: 'Bart' }]));
// returns 'Bart'

console.log(list([]));
// returns ''
