// 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let str = "";

  for (let i = 0; i < N; i++) {
    str = str + " ".repeat(Math.floor((2 * (N - 1) + 1) / 2) - i) + "*".repeat(2 * i + 1) + "\n";
  }

  for (let i = N - 2; i >= 0; i--) {
    str = str + " ".repeat(Math.floor((2 * (N - 1) + 1) / 2) - i) + "*".repeat(2 * i + 1) + "\n";
  }

  str = str.slice(0, str.length - 1);

  return str;
}

console.log(solution(Number(input)));