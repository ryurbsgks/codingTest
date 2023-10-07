// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().split(" ");

function solution(A, B, C, num) {
  switch (num) {
    case 1: 
      return (Number(A) + Number(B)) % Number(C);
    case 2:
      return ((Number(A) % Number(C)) + (Number(B) % Number(C))) % Number(C);
    case 3:
      return (Number(A) * Number(B)) % Number(C);
    case 4:
      return ((Number(A) % Number(C)) * (Number(B) % Number(C))) % Number(C);
  }
}

console.log(solution(input[0], input[1], input[2], 1));
console.log(solution(input[0], input[1], input[2], 2));
console.log(solution(input[0], input[1], input[2], 3));
console.log(solution(input[0], input[1], input[2], 4));