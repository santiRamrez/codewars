// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
  let lookingFor = word.split("").sort().join("").toLowerCase();
  let filter = words.filter((val) => {
    let sorted = val.split("").sort().join("").toLowerCase();
    return sorted === lookingFor ? true : false;
  });
  return filter;
}

let test = anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
console.log(test);
