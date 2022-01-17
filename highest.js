//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  let arr = x.split(" ");
  let abc = [...new Array(26)].map((val, i) => {
    val = 97 + i;
    return String.fromCharCode(val);
  });

  let scores = [];

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i].split("").map((val) => {
      let num = abc.indexOf(val);
      return num + 1;
    });
    let sum = subArr.reduce((prev, curr) => prev + curr);
    scores.push(sum);
  }

  let sorted = [...scores].sort((a, b) => a - b);
  let highestScore = sorted.slice(-1)[0];
  let index = scores.indexOf(highestScore);
  return arr[index];
}

let test = high("Cual es la palabra mas chida");
console.log(test);

// console.log("a".charCodeAt(0));
