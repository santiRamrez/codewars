function pigIt(str) {
  //Code here
  let arr = str.split(" ");
  let invert = arr.map((word) => {
    if (word.match(/[!¡¿?.,]/g)) return word;
    let first = word.substr(0, 1);
    let change = word.replace(first, "") + first + "ay";
    return change;
  });
  return invert.join(" ");
}

// function pigIt(str) {
//   return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
// }

let test = pigIt("Pig latin is cool !");
console.log(test);
