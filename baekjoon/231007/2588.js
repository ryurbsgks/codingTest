// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(A, B, num) {
  switch (num) {
    case 1:
      return Number(A) * Number(B[B.length - num]);
    case 2:
      return Number(A) * Number(B[B.length - num]);
    case 3:
      return Number(A) * Number(B[B.length - num]);
    case 4:
      return Number(A) * Number(B);
  }
}

console.log(solution(input[0], input[1], 1));
console.log(solution(input[0], input[1], 2));
console.log(solution(input[0], input[1], 3));
console.log(solution(input[0], input[1], 4));