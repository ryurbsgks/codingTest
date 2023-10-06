// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().split(" ");

function solution(A, B, operator) {
  switch (operator) {
    case "+":
      return Number(A) + Number(B);
    case "-":
      return Number(A) - Number(B);
    case "*":
      return Number(A) * Number(B);
    case "/":
      return parseInt(Number(A) / Number(B));
    case "%":
      return Number(A) % Number(B);
  }
}

console.log(solution(input[0], input[1], "+"));
console.log(solution(input[0], input[1], "-"));
console.log(solution(input[0], input[1], "*"));
console.log(solution(input[0], input[1], "/"));
console.log(solution(input[0], input[1], "%"));