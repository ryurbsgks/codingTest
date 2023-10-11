// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().split("\n");
const newInput = input.slice(1, input.length);

function solution(A, B, i) {
  return `Case #${i}: ${A} + ${B} = ${A + B}`;
}

for (let i = 0; i < Number(input[0]); i++) {
  console.log(solution(Number(newInput[i].split(" ")[0]), Number(newInput[i].split(" ")[1]), i + 1));
}