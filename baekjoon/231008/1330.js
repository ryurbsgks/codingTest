// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().split(" ");

function solution(A, B) {
  if (Number(A) > Number(B)) {
    return ">";
  } else if (Number(A) < Number(B)) {
    return "<";
  } else {
    return "==";
  }
}

console.log(solution(input[0], input[1]));