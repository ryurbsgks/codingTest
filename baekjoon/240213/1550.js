// 16진수 수를 입력받아서 10진수로 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution() {
  return parseInt(input, 16);
}

console.log(solution());