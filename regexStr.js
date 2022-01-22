// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

function sumOfIntegersInString(s) {
  let match = s.match(/[0-9]+/g);
  if (!match) return 0;
  let toNumber = match.map((num) => Number(num));
  return toNumber.reduce((prev, curr) => prev + curr); // what the function name says
}

let test = sumOfIntegersInString(
  "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
);

console.log(test);
