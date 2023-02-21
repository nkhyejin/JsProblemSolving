const fs = require("fs");

//- 기준으로 배열로 분리
let input = fs.readFileSync("index.txt").toString().split("-");
console.log(input);
let answer = input.reduce((total, item, idx) => {
  let sum = item
    .split("+")
    .map((a) => +a)
    .reduce((total, cur) => total + cur);
  return idx === 0 ? total + sum : total - sum;
}, 0);

console.log(answer);
