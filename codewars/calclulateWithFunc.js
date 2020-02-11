function zero(n) {
  //if 0 return a function, else just return 0
  // if (n) {
  //   return n(0);
  // } else {
  //   return 0;
  // }
  return n ? n(0) : 0;
}
function one(n) {
  return n ? n(1) : 1;
}
function two(n) {
  return n ? n(2) : 2;
}
function three(n) {
  return n ? n(3) : 3;
}
function four(n) {
  return n ? n(4) : 4;
}
function five(n) {
  return n ? n(5) : 5;
}
function six(n) {
  return n ? n(6) : 6;
}
function seven(n) {
  return n ? n(7) : 7;
}
function eight(n) {
  return n ? n(8) : 8;
}
function nine(n) {
  return n ? n(9) : 9;
}

function plus(b) {
  return function(a) {
    return a + b;
  };
}
// console.log(plus());
function minus(b) {
  return function(a) {
    return a - b;
  };
}
function times(b) {
  return function(a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function(a) {
    return Math.floor(a / b);
  };
}

console.log(eight(dividedBy(three())));
