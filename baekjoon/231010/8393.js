// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString();

function solution(n) {

  let sum = 0;

  for (let i = 1; i < n + 1; i ++) {
    sum = sum + i;
  }

  return sum;
}

console.log(solution(Number(input)));