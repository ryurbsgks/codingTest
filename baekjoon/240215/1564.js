// 팩토리얼5란, N!의 0이 아닌 뒤 5자리를 말한다.
// N이 주어졌을 때, 팩토리얼5를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let num = 1;
  
  for (let i = 2; i <= N; i++) {
    num *= i;

    while (true) {
      if (num.toString().slice(-1) === "0") {
        num /= 10;
      } else {
        break;
      }
    }
    
    num %= 100000000000000000;
  }

  return num.toString().slice(-5);
}

console.log(solution(Number(input)));