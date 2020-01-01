function generateHashtag (str) {
  const array = str.trim().replace(/\s\s+/g, " ").split(" ");
  const hashTagArray = [];
  if(array.join("").length >= 140 || array.join("").length === 0) {
    return false
  } else {
    for(let i of array) {
      hashTagArray.push(i[0].toUpperCase() + i.substr(1));
    }
  }
  return "#" + hashTagArray.join("");
}
console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("    Hello     World   "));