function cakes(recipe, available) {
  let array = [];
  // console.log(Object.keys(recipe), Object.keys(available));
  // if (Object.keys(recipe).length > Object.keys(available).length) return 0;
  // for (let i in recipe) {
  //   for (let j in available) {
  //     // if (i !== j) return 0;
  //     if (i === j) {
  //       array.push(Math.floor(available[j] / recipe[i]));
  //     }
  //   }
  // }
  for (let x in available) {
    console.log(x);
    if (!(x in recipe)) {
      console.log("wow");
    }
  }
  // return Math.min.apply(Math, array);
}
cakes(
  { flour: 500, sugar: 200, milk: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
// //returns 2
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, milk: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );
// //returns 0
// console.log(
//   cakes(
//     { apple: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );
