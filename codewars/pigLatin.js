function pigIt(str){
  //Code here
  const words = str.split(" ");
  const array = [];
  for(let i of words) {
    if(i.match(/[^a-zA-Z ]+/)) {
      array.push(words[words.length - 1])
    } else { 
      array.push(i.slice(1) + i[0] + "ay") 
    }
  }
  return array.join(" ")
}