// 1부터 N까지의 수를 이어서 쓰면 다음과 같이 새로운 하나의 수를 얻을 수 있다.
// 1234567891011121314151617181920212223...
// 이렇게 만들어진 새로운 수는 몇 자리 수일까? 이 수의 자릿수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim();

function solution(N) {

  let result = 0;

  for (let i = 1; i <= N; i *= 10) {
    result += N - i + 1;
  }

  return result;
}

console.log(solution(Number(input)));