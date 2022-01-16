function remove(string) {
  let arr = string.split("");
  let signs = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "!") signs += "!";
    if (arr[i] !== "!") break;
  }
  let newStr = string.replace(/!/g, "") + signs;
  return newStr;
}

let test = remove("!!Hi! Hii!!!");
console.log(test);
