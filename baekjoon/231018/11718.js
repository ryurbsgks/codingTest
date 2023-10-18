// 입력 받은 대로 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(str) {
  return str;
}

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}