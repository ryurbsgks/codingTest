// 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");
const newInput = input.map( (el) => el.split(" ")).map( (element) => element.map( (e) => Number(e)));

function solution(arr) {

  let answer = "";
  let x = [];
  let y = [];

  arr.map( (el) => {
    x.push(el[0]);
    y.push(el[1]);
  });

  x.sort( (a, b) => a - b);
  y.sort( (a, b) => a - b);

  x[0] !== x[1] ? answer = x[0] : answer = x[2];
  y[0] !== y[1] ? answer = `${answer} ${y[0]}` : answer = `${answer} ${y[2]}`

  return answer;
}

console.log(solution(newInput));