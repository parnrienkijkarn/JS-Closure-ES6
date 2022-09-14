function sum(...number) {
//   return number.reduce(function (a, b) {
//     return a + b;
//   });
// }

// arrow function (shorter version)
  return number.reduce((a, b) => a + b, 0);
};

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
