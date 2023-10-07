// 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().split(" ");

function solution(A, B, C) {
  return Number(A) + Number(B) + Number(C);
}

console.log(solution(input[0], input[1], input[2]));