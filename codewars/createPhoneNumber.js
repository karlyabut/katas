function createPhoneNumber(numbers) {
  const numberStr = numbers.join('');
  const phoneNum = numberStr.match(/^(\d{3})(\d{3})(\d{4})$/);
  return `(${phoneNum[1]}) ${phoneNum[2]}-${phoneNum[3]}`;
}

//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"
