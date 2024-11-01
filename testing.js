// Using WHILE
console.log("WHILE example:");
let rgn1;
let attempts1 = 0;
do {
  rgn1 = Math.random();
  attempts1++;
  console.log(`Attempt ${attempts1}: ${rgn1.toFixed(3)}`);
} while (rgn1 < 0.14 || rgn1 > 0.36);
console.log(
  `Found acceptable number ${rgn1.toFixed(3)} after ${attempts1} attempts\n`
);

// Using IF
console.log("IF example:");
let rgn2 = Math.random();
console.log(`Generated number: ${rgn2.toFixed(3)}`);
if (rgn2 < 0.14 || rgn2 > 0.36) {
  console.log("Number is outside range - but we only checked once!");
} else {
  console.log("Number is inside range - but we only checked once!");
}
