// 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split("\n");

function solution(str) {
  return `${str[0]}${str[str.length - 1]}`;
}

for (let i = 1; i < input.length; i++) {
  console.log(solution(input[i]));
}