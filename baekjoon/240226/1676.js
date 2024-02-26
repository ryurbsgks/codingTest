// N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let n = 0;

  for (let i = 5; i <= N; i *= 5) {
    n += Math.floor(N / i);
  }

  return n;
}

console.log(solution(Number(input)));