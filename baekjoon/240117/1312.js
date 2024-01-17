// 피제수(분자) A와 제수(분모) B가 있다. 두 수를 나누었을 때, 소숫점 아래 N번째 자리수를 구하려고 한다. 예를 들어, A=3, B=4, N=1이라면, A÷B=0.75 이므로 출력 값은 7이 된다.

const fs = require("fs");
const input = fs.readFileSync("/home/ryurbsgks5114/codingTest/baekjoon/input.txt").toString().trim().split(" ");

function solution(arr) {

  let result = 0;
  let [A, B, N] = arr;

  for (let i = 0; i < N; i++) {
    A = (A % B) * 10;
    result = Math.floor(A / B);
  }

  return result;
}

console.log(solution(input.map( (el) => Number(el))));