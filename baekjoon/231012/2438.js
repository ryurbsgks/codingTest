// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString();

function solution(n) {

  let str = "";

  for (let i = 1; i <= n; i++) {
    str = str + "*".repeat(i) + "\n";
  }

  str = str.slice(0, str.length - 1);

  return str;
}

console.log(solution(Number(input)));