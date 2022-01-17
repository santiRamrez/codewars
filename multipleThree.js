const prevMultOfThree = (n) => {
  //your solution
  if (n % 3 == 0) {
    return n;
  } else {
    let str = n.toString();
    for (let i = str.length - 1; i > 0; i--) {
      let newStr = str.slice(0, i);
      let newNum = Number(newStr);
      if (newNum % 3 === 0) return newNum;
    }
    return null;
  }
};

let test = prevMultOfThree(25);
console.log(test);
