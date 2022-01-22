// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
  // TODO: insert code
  let needing = Object.keys(recipe);
  let howMuch = [];
  for (let i = 0; i < needing.length; i++) {
    let ingredient = needing[i];
    if (available.hasOwnProperty(ingredient)) {
      let times = available[needing[i]] / recipe[needing[i]];
      let fixed = Math.floor(times);
      if (fixed < 1) return 0;
      howMuch.push(fixed);
    } else {
      return 0;
    }
  }
  let pickLowest = [...howMuch].sort((a, b) => a - b)[0];
  return pickLowest;
}

let test = cakes(
  { cocoa: 20, sugar: 35, nuts: 33 },
  {
    flour: 3000,
    milk: 4900,
    cream: 2800,
    eggs: 1300,
    sugar: 2300,
    cocoa: 1000,
    crumbles: 9300,
    chocolate: 8700,
    pears: 2300,
    oil: 600,
    nuts: 4100,
    butter: 3800,
    apples: 8900,
  }
);

console.log(test);
