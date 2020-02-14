function validParentheses(parens) {
  //TODO
  let validateCount = 0;

  for (let x of parens) {
    if (x === '(') {
      validateCount += 1;
    } else if (x === ')') {
      if (validateCount === 0) {
        return false;
      } else {
        validateCount--;
      }
    }
  }
  if (validateCount === 0) {
    return true;
  }
  return false;
}
