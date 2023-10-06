// 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().split(" ");

function solution(A, B) {
  return Number(A) / Number(B);
}

console.log(solution(input[0], input[1]));