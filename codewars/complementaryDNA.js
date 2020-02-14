function DNAStrand(dna) {
  const finalArray = [];
  for (let str of dna) {
    if (str === 'A') {
      finalArray.push('T');
    } else if (str === 'T') {
      finalArray.push('A');
    } else if (str === 'C') {
      finalArray.push('G');
    } else if (str === 'G') {
      finalArray.push('C');
    }
  }
  return finalArray.join('');
}

console.log(DNAStrand('ATTGC')); // return "TAACG"

console.log(DNAStrand('GTAT')); // return "CATA"
