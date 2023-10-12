// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(A, B) {
  return A + B;
}

for (let i = 0; i < input.length - 1; i++) {
  console.log(solution(Number(input[i].split(" ")[0]), Number(input[i].split(" ")[1])));
}